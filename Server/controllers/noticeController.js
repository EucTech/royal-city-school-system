const Notice = require('../models/notice');

const noticeController = {};

noticeController.addNotice = async (req, res) => {
    try {
        const { title, description } = req.body;

        let errors = "";

        if (!title) {
            errors += 'Title is required';
        } else if (!description) {
            errors += 'Description is required';
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                errors: errors.trim(),
            });
        }

        const notice = new Notice({
            title,
            description,
        });

        const savedNotice = await notice.save();

        return res.status(201).json({
            success: true,
            message: 'Notice created successfully',
            data: savedNotice,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

noticeController.getAllNotice = async (req, res) => {
    try {
        const notices = await Notice.find();
        return res.status(200).json({
            success: true,
            data: notices,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

noticeController.getTotalNotice = async (req, res) => {
    try {
        const totalNotices = await Notice.find().count();
        return res.status(200).json({
            success: true,
            data: totalNotices,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

module.exports = noticeController;