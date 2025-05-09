const jwt = require('jsonwebtoken')
const Student = require("../models/studentModel");
const bcrypt = require("bcryptjs"); 

// SIGNUP Controller
const signup = async (req, res) => {
  try {
    const { email} = req.body;

    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered.", success: false });
    }

    // Create and save new student
    const newStudent = new Student(req.body);
    await newStudent.save();

    return res.status(201).json({ message: "Student registered successfully.", success: true });
  } catch (error) {
    console.error("Signup Error:", error.message);
    return res.status(500).json({ message: "Server error", success: false });
  }
};




// LOGIN Controller with JWT and cookie
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if student exists
    const student = await Student.findOne({ email }).select("+password");
    if (!student) {
      return res.status(404).json({ message: "Student not found", success: false });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password", success: false });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: student._id, email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // token valid for 1 day
    );

    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // true in production with HTTPS
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      message: "Login successful",
      success: true,
      student: {
        _id: student._id,
        name: student.name,
        email: student.email
      }
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({ message: "Server error", success: false });
  }
};


// LOGOUT Controller
const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Logout failed", success: false });
  }
};

const getStudentInfo = async (req, res) => {
  try {
    const studentId = req.user._id; 

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found", success: false });
    }

    return res.status(200).json({
      message: "Student data fetched successfully",
      success: true,
      student
    });
  } catch (error) {
    console.error("Get User Info Error:", error.message);
    return res.status(500).json({ message: "Server error", success: false });
  }
};


module.exports = {
  signup,
  login,
  logout,
  getStudentInfo
};
