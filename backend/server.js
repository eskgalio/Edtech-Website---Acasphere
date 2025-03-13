const debug = require('debug');
const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cookieSession = require('cookie-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const path = require('path');
const authMiddleware = require('./middleware/authMiddleware'); 

const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contact');
const notesRoutes = require('./routes/notesRoutes');
const taskRoutes = require('./routes/taskRoutes');
const focusTaskRoutes = require('./routes/focusTaskRoutes');
const repositoryRoutes = require('./routes/repositoryRoutes');
const eventRoutes = require('./routes/eventRoutes');

const appDebug = debug('app:server');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // Frontend URL
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));
appDebug('🟡 [CORS] CORS configured with origin: %s', process.env.CLIENT_URL);

app.use(express.json()); 
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET || 'your-secret-key'));
appDebug('🟡 [MIDDLEWARE] Cookie parser initialized with secret key: %s', process.env.COOKIE_SECRET);

app.use(
  cookieSession({
    name: 'sessionId',
    secret: 'your_secret_key', // A secret key for signing cookies (should be a strong value)
    keys: ['your_secret_key'],  // Add this line to define keys for cookie signing
    resave: false,
    saveUninitialized: false,
    signed: true,
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/acasphere',
      ttl: 24 * 60 * 60,  // 1 day
    }),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
    },
  })
);
appDebug('🟡 [SESSION] Session middleware configured');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
appDebug('🟡 [UPLOADS] Static files for uploads served at /uploads');

app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/focus-tasks', focusTaskRoutes);
app.use('/api/repositories', repositoryRoutes);
app.use('/api/events', eventRoutes);
appDebug('🟡 [ROUTES] API routes set up');

app.get('/api/test-session', (req, res) => {
  if (req.session && req.session.userId) {
    res.json({ message: 'Session Active', userId: req.session.userId });
  } else {
    res.status(401).json({ message: 'No Active Session' });
  }
});
appDebug('🟡 [SESSION TEST] Session test route created');

app.use(authMiddleware);
appDebug('🟡 [AUTH] Authentication middleware applied');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/acasphere')
  .then(() => appDebug('🟢 [MONGODB] Connected to MongoDB'))
  .catch((err) => appDebug('🔴 [MONGODB] Error connecting to MongoDB: %s', err.message));

app.listen(port, () => {
    appDebug('🟢 [SERVER] Server is running on port %s in %s mode', port, process.env.NODE_ENV || 'development');
});
