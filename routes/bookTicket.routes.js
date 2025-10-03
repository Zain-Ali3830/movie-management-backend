import express from 'express';
import { bookTicket } from '../controllers/ticketBook.controllers.js';
import { validateTicketBooking } from '../middlewares/ticketBook.middleware.js';

const bookingRouter = express.Router();

bookingRouter.route('/bookticket').post(validateTicketBooking, bookTicket);

export default bookingRouter;