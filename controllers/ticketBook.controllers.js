import { pool } from "../database/index.js";

// Book a ticket

export const bookTicket = async (req, res) => {
    try {
        const {movieTitle, location, timeSlot, ticketPrice} = req.body;
        const newTicket = await pool.query('INSERT INTO tickets (movieTitle, location, timeSlot, ticketPrice) VALUES ($1,$2,$3,$4) RETURNING *', [movieTitle, location, timeSlot, ticketPrice]);
        res.json(newTicket.rows[0]);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}