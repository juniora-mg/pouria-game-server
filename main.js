import { authMiddleware, login, register } from './controllers/auth.js'
import { recordNew } from './controllers/record.js';

import express from 'express';
import { body } from 'express-validator'

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// login
app.post('/login', [
  body('username').notEmpty().withMessage('username is required'),
  body('password').notEmpty().withMessage('password is required')
], login);

// register
app.post('/register', [
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required'),
    body('record').notEmpty().withMessage('record is required')
  ], register);

// set new record
app.post('/record/new', [
  body('record').notEmpty().isNumeric().withMessage('record is required and must be numeric'),
  authMiddleware
], recordNew)

// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});





// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbXoiLCJpYXQiOjE3NTI1ODQ2MjcsImV4cCI6MTc1MjY3MTAyN30.RDPrbkd1eKlztr-24NGdP4r0TDZU7BtAvWK72v1osO8