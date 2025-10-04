import pool from "../database/index.js";

export const aboutMessages = async (req, res) => {
    try {
        const {name, email, message} = req.body;
        const newMessage = await pool.query(
            "INSERT INTO message (name, email, message) VALUES ($1, $2, $3) RETURNING *",
            [name, email, message]
        );
        res.status(200).json(newMessage.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}