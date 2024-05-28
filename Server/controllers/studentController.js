const Student = require("../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const studentController = {};

studentController.signup = async (req, res) => {
  try {
    const { firstname, middlename, lastname, email, password, student_class, image, location } = req.body;

    let checkEmail = await Student.findOne({
      email: req.body.email,
    });

    let errors = "";

    if (!firstname) {
      errors += "First name is required";
    } else if (!middlename) {
      errors += "middle name is required";
    } else if (!lastname) {
      errors += "Last name is required";
    } else if (!password) {
      errors += "Password is required";
    } else if (!location) {
      errors += "Enter your location";
    } else if (!email) {
      errors += "Email is required";
    } else {
      if (checkEmail) {
        errors += "Email already exists";
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: errors.trim(),
      });
    }

    const student = new Student({
      firstname,
      middlename,
      lastname,
      email,
      password,
      student_class,
      image,
      location,
    });

    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash(password, salt);

    const savedStudent = await student.save();

    const data = {
      student: {
        id: savedStudent._id,
      },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET, {
      // expiresIn: 3600,
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      token: token,
      data: {
        student: savedStudent,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


studentController.login = async (req, res) => {
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

        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        const isMatch = await bcrypt.compare(password, student.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Password is incorrect',
            });
        }

        // jwt authentication
        const data = {
            student: {
                id: student._id,
            },
        };

        // jwt token
        const token = jwt.sign(data, process.env.JWT_SECRET, {
            // expiresIn: 3600,
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token: token,
            data: {
                student: student,
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

studentController.getAllStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            data: students,
        });
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
}

studentController.getTotalStudent = async (req, res) => {
    try {
        const students = await Student.find().countDocuments();
        res.status(200).json({
            success: true,
            data: students,
        });
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
}

studentController.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params._id);
        res.status(200).json({
            success: true,
            data: student,
        });
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
}

module.exports = studentController;