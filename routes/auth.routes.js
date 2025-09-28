import { Router } from "express";
export const authRouter = Router();
import { signup } from "../controllers/auth.controllers.js";
import { signupMiddleware } from "../middlewares/auth.middleware.js";
authRouter.route('/signup').post(signupMiddleware,signup);
