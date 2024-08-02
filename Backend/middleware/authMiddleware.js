const jwt = require('jsonwebtoken');

const authMiddleWare = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ isAuthenticated: false, message: 'Not authorized! No token' });
        }

        const decode = jwt.verify(token, 'secretKeyOfJwt');
        if (decode?.role === 'user') {
            req.id = decode.id;
            return next();
        } else {
            return res.status(403).json({ isAuthenticated: false, message: 'Not authorized' });
        }
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(401).json({ isAuthenticated: false, message: 'Token is not valid' });
    }
};

module.exports = authMiddleWare;
