export const validateTicketBooking = (req, res, next) => {
    const { movieTitle, location, timeSlot, ticketPrice } = req.body;
    if (!movieTitle || !location || !timeSlot || !ticketPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }
    next();
  };