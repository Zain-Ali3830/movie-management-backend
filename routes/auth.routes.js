import { Router } from "express";
export const authRouter = Router();
import { signup } from "../controllers/auth.controllers.js";
import { login } from "../controllers/auth.controllers.js";
import { loginMiddleware } from "../middlewares/auth.middleware.js";
import { signupMiddleware } from "../middlewares/auth.middleware.js";
authRouter.route('/signup').post(signupMiddleware,signup);
authRouter.route('/login').post(loginMiddleware,login);
