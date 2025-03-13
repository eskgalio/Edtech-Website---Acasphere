const mongoose = require('mongoose');
const debug = require('debug');
const dbDebug = debug('app:database');

const connectDB = async () => {
    try {
        dbDebug('🟡 [MONGO CONNECT] Attempting to connect to MongoDB...');
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        dbDebug('🟢 [MONGO CONNECT] MongoDB Connected: %s', conn.connection.host);
    } catch (error) {
        dbDebug('🔴 [MONGO CONNECT] Error Connecting to MongoDB: %s', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
