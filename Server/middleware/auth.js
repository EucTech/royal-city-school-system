const jwt = require('jsonwebtoken');

const studentAuth = (req, res, next) => {
    const authHeader = req.header('Authorization');
    // console.log(authHeader);

    if (!authHeader) {
        return res.status(401).json({ 
            success: false,
            message: 'You must be logged in, authorization denied',
        });
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.student = decoded.student;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Token is not valid' });
    }
};

module.exports = studentAuth;