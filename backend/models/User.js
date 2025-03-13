const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [50, 'Username must be less than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Email format is invalid'] 
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters']
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    educationLevel: {
        type: String,
        required: true
    },
    preferredStudyTime: {
        type: String,
        required: true
    },
    learningGoals: {
        type: String,
        required: true
    },
    disabilityNeeds: {
        type: String,
        required: false
    },
    notificationPreference: {
        type: String,
        required: true
    }
});


// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;
