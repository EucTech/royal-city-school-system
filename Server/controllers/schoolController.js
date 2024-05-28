const School = require('../models/school');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const schoolController = {};


schoolController.signup = async (req, res) => {
    try {
        const { name, email, password, image, location } = req.body;

        let checkEmail = await School.findOne({ 
            email: req.body.email
        });

        let errors = "";
    
        if (!name) {
            errors += 'Name is required';
        }
        else if (!password) {
            errors += 'Password is required';
        } 
        else if (!location) {
            errors += 'Enter your location';
        }
        else if (!email) {
            errors += 'Email is required';
        } else {
            if (checkEmail) {
                errors += 'Email already exists';
            }
        }

        if(errors.length > 0) {
            return res.status(400).json({
                success: false,
                errors: errors.trim(),
            });
        }

        const school = new School({
            name,
            email,
            password,
            image,
            location,
        });

        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);

        // now we set school password to hashed password
        school.password = await bcrypt.hash(req.body.password, salt);

        // save school to database
        const savedSchool = await school.save();

        // jwt authentication
        const data = {
            school: {
                id: savedSchool._id,
            },
        };

        // jwt token
        const token = jwt.sign(data, process.env.JWT_SECRET, {
            // expiresIn: 3600,
        });

        res.status(201).json({ 
            success: true,
            message: 'School account created successfully',
            token: token,
            data: {
                school: savedSchool,
            },
        });
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
}

schoolController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let errors = "";

        if (!email) {
            errors += 'Email is required';
        } else if (!password) {
            errors += 'Password is required';
        }

        if(errors.length > 0) {
            return res.status(400).json({
                success: false,
                errors: errors.trim(),
            });
        }

        const school = await School.findOne({ email });

        if (!school) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        const isMatch = await bcrypt.compare(password, school.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Password is incorrect',
            });
        }

        // jwt authentication
        const data = {
            school: {
                id: school._id,
            },
        };

        // jwt token
        const token = jwt.sign(data, process.env.JWT_SECRET, {
            // expiresIn: 3600,
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                school: school,
            },
            token: token,
        });
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
}


module.exports = schoolController;