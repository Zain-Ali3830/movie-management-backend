export const messageValidation = (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (message.length < 10) {
      return res.status(400).json({ message: "Message must be at least 10 characters long" });
    }
    next();
  };