import express from "express";
export const movieRouter = express.Router();
import { upload } from "../middlewares/cloudinary.js";
import { createMovie } from "../controllers/movie.controllers.js";
import { getAllMovies } from "../controllers/movie.controllers.js";
import { getMovieById } from "../controllers/movie.controllers.js";

movieRouter.route("/movies").post(upload.fields([{name:"image",maxCount:1}]), createMovie);
movieRouter.route("/getmovies").get(getAllMovies)
movieRouter.route("/movieById/:id").get(getMovieById)