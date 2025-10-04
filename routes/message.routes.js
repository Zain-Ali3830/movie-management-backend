import express from "express";
import { aboutMessages } from "../controllers/message.controllers.js";
import { messageValidation } from "../middlewares/message.middleware.js";

const messageRouter = express.Router();

messageRouter.route("/contact").post(messageValidation, aboutMessages);

export default messageRouter;