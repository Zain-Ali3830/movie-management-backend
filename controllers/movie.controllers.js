import { pool } from "../database/index.js";
export const createMovie = async (req, res) => {
    try {
        const {title,duration, rating, release_date,genre,description,director,writers} = req.body;
        const picurl = req.files.image[0].path;
        console.log(picurl);
        const newMovie = await pool.query('INSERT INTO movies (title,duration, rating, release_date,genre,description,director,writers,tag,picurl) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',[title,duration, rating, release_date,genre,description,director,writers,picurl]);
        res.json(newMovie.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message});   
    }
}