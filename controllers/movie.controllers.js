import pool from '../config/db.js';

export const createMovie = async (req, res) => {
    try {
        const {title,duration, rating, release_date,genre,description,director,writers,tag} = req.body;
        const newMovie = await pool.query('INSERT INTO movies (title,duration, rating, release_date,genre,description,director,writers,tag) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',[title,duration, rating, release_date,genre,description,director,writers,tag]);
        res.json(newMovie.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message});   
    }
}