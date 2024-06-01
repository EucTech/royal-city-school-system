const Subject = require('../models/subject');
const subjectController = {};

subjectController.addSubject = async (req, res) => {
    try {
        const { subject_name, teacher } = req.body;

        let errors = "";

        if (!subject_name) {
            errors += 'Name is required';
        } else if (!teacher) {
            errors += 'Teacher is required';
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                errors: errors.trim(),
            });
        }

        const subject = new Subject({
            subject_name,
            teacher,
        });

        const savedSubject = await subject.save();

        return res.status(201).json({
            success: true,
            message: 'Subject created successfully',
            data: savedSubject,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
            console: console.log("error", e.message)
        });
    }
};


subjectController.getAllSubject = async (req, res) => {
    try {
        const subjects = await Subject.find();
        return res.status(200).json({
            success: true,
            data: subjects,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

subjectController.getTotalSubject = async (req, res) => {
    try {
        const totalSubjects = await Subject.find().countDocuments();
        return res.status(200).json({
            success: true,
            data: totalSubjects,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
}

module.exports = subjectController;