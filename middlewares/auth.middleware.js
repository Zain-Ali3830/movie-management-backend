// Middleware for validating signup data
export const signupMiddleware = async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!usernameRegex.test(userName)) {
      return res
        .status(400)
        .json({
          message:
            "Username must contain only letters, numbers, hyphens, and underscores",
        });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password do not match" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Middleware for validating login data
export const loginMiddleware = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};