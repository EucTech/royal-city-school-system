const express = require('express');
const router = express.Router();
const studentAuth = require('../middleware/auth');

const schoolController = require('../controllers/schoolController');
const studentController = require('../controllers/studentController');
const subjectController = require('../controllers/subjectController');
const noticeController = require('../controllers/noticeController');

// School routes
router.post('/auth/school-signup', schoolController.signup);
router.post('/auth/school-login', schoolController.login);
router.get('/school-admin/all-student', studentAuth, studentController.getAllStudent);
router.get('/school-admin/total-student', studentAuth, studentController.getTotalStudent);


// Student routes
router.post('/auth/student-signup', studentController.signup);
router.post('/auth/student-login', studentController.login);
router.get('/student-admin/student/:_id', studentAuth, studentController.getStudentById);

// subject routes
router.post('/school-admin/create-subject', studentAuth, subjectController.addSubject);
router.get('/school-admin/all-subject', studentAuth, subjectController.getAllSubject);
router.get('/school-admin/total-subject', studentAuth, subjectController.getTotalSubject);

// notice routes
router.post('/school-admin/add-notice', studentAuth, noticeController.addNotice);
router.get('/school-admin/all-notice', studentAuth, noticeController.getAllNotice);
router.get('/school-admin/total-notice', studentAuth, noticeController.getTotalNotice);


module.exports = router;