const express = require('express');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const rateLimit = require('express-rate-limit');
const debug = require('debug')('app:auth');
const User = require('../models/User');

const router = express.Router();
const app = express();

// Use cookie-session middleware for session management
app.use(cookieSession({
    name: 'session',
    secret: process.env.COOKIE_SECRET || 'your-secret-key', // Use your own secret here
    maxAge: 24 * 60 * 60 * 1000, // 24 hours (adjustable)
    httpOnly: true, // Ensures cookie is not accessible via JavaScript
    secure: process.env.NODE_ENV === 'production', // Ensure it's true in production for HTTPS
}));

// Rate limiter for login attempts
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login requests per window
    message: 'Too many login attempts. Please try again later.',
});

// Register Route
router.post('/register', async (req, res) => {
    debug('🟡 [REGISTER] Attempt:', req.body.email);

    try {
        const {
            username,
            email,
            password,
            phone,
            dateOfBirth,
            location,
            educationLevel,
            preferredStudyTime,
            learningGoals,
            disabilityNeeds,
            notificationPreference,
        } = req.body;

        // Validate data types
        if (
            !username || !email || !password || !phone || !dateOfBirth || !location ||
            !educationLevel || !preferredStudyTime || !notificationPreference || !learningGoals
        ) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        if (isNaN(Date.parse(dateOfBirth))) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            dateOfBirth: new Date(dateOfBirth),
            location,
            educationLevel,
            preferredStudyTime,
            learningGoals,
            disabilityNeeds: disabilityNeeds || null,
            notificationPreference,
        });

        await newUser.save();
        debug(`🟢 [REGISTER SUCCESS] New user created: ${email}`);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        debug(`🚨 [REGISTER ERROR] ${error.message}`);
        res.status(500).json({ message: 'Error during registration', error: error.message });
    }
});

// Login Route
router.post('/login', loginLimiter, async (req, res) => {
    const { email, password } = req.body;
    debug(`🟡 [LOGIN] Attempt - Email: ${email}`);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            debug(`🔴 [LOGIN ERROR] User not found - Email: ${email}`);
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            debug(`🔴 [LOGIN ERROR] Incorrect password - Email: ${email}`);
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Set session data
        req.session.user = {
            email: user.email,
            username: user.username, // Optional, for display purposes
        }; 
        
        debug(`🟢 [LOGIN SUCCESS] User logged in - ID: ${user._id}`);
        res.status(200).json({
            message: 'Login successful',
            user: { id: user._id, username: user.username, email: user.email },
        });
    } catch (error) {
        debug(`🚨 [LOGIN ERROR] ${error.message}`);
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Session Check Route
router.get('/check-session', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized access. Please log in again.' });
    }

    try {
        res.status(200).json({
            message: 'Session is active',
            user: { id: req.session.user.id, username: req.session.user.username, email: req.session.user.email },
        });
    } catch (error) {
        console.error('Session check error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to ensure the user is authenticated
function checkAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
      return next();
    }
    res.status(401).json({ message: "Unauthorized: Please log in" });
  }
  
// Fetch user profile
router.get("/profile", async (req, res) => {
    try {
      if (!req.session.user || !req.session.user.email) {
        return res.status(401).json({ message: "Unauthorized: No session found" });
      }
  
      // Use email from session to fetch user data
      const user = await User.findOne({ email: req.session.user.email }).select(
        "-password"
      );
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  router.put("/profile", async (req, res) => {
    try {
      if (!req.session.user || !req.session.user.email) {
        return res.status(401).json({ message: "Unauthorized: No session found" });
      }
  
      // Find and update user by email
      const updatedUser = await User.findOneAndUpdate(
        { email: req.session.user.email },
        req.body, // Ensure validation is applied to the input data
        { new: true, runValidators: true }
      ).select("-password");
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Logout Route
router.post('/logout', (req, res) => {
    req.session = null; // Destroy session
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
