const mongoose = require('mongoose');

// Replace 'acasphere' with your database name
const DB_URI = 'mongodb://localhost:27017/acasphere';

mongoose.connect(DB_URI)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB');
        mongoose.connection.close(); // Close the connection after testing
    })
    .catch(err => {
        console.error('❌ Error connecting to MongoDB:', err.message);
    });
