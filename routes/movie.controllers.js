import express from "express";
export const movieRouter = express.Router();
import { upload } from "../middlewares/cloudinary.js";
import { createMovie } from "../controllers/movie.controllers.js";

movieRouter.route("/").post(upload.fields([{name:"image",maxCount:1}]), createMovie);