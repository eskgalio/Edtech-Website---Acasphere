const debug = require('debug');
const authDebug = debug('app:auth');

const authMiddleware = (req, res, next) => {
    authDebug('🟡 [AUTH MIDDLEWARE] Session:', req.session); 
    if (req.session && req.session.user) {
        authDebug('🟢 [AUTH MIDDLEWARE] Session exists, user authenticated: %s', req.session.user.email);
        return next();
    } else {
        authDebug('🔴 [AUTH MIDDLEWARE] No session found or user not authenticated'); 
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
};

module.exports = authMiddleware;
