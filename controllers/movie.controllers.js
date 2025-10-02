import { pool } from "../database/index.js";
export const createMovie = async (req, res) => {
    try {
        const {title,duration, rating, release_date,genre,description,director,writers} = req.body;
        const picurl = req.files.image[0].path;
        console.log(picurl);
        const newMovie = await pool.query('INSERT INTO movies (title,duration, rating, release_date,genre,description,director,writers,picurl) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',[title,duration, rating, release_date,genre,description,director,writers,picurl]);
        res.json(newMovie.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message: error.message});   
    }
}


// get all movies

export const getAllMovies = async (req,res)=>{
    try {
        const getMovies= await pool.query("SELECT * from movies")
        console.log(getMovies.rows[0])
        res.json(getMovies.rows)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



// get movie by id
export const getMovieById = async (req,res)=>{
    try {
        const {id} = req.params;
        const getMovieById= await pool.query("SELECT * from movies WHERE id = $1",[id])
        console.log(getMovieById.rows[0])
        res.json(getMovieById.rows[0])
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}