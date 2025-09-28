import { pool } from "../database/index.js";
export const  signup= async (req, res) => {
    try {
        const {userName,email,password,confirmPassword}=req.body;
        const newUser= await pool.query('INSERT INTO users (userName,email,password,confirmPassword) VALUES ($1,$2,$3,$4) RETURNING *',[userName,email,password,confirmPassword]);
        res.json(newUser.rows[0]);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}