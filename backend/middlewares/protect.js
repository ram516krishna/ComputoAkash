const jwt = require("jsonwebtoken");


const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token missing.", success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save decoded user info in req
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};

module.exports = protect;
