import { authMiddleware, login, register } from './controllers/auth.js'
import { newRecord, getAllRecords } from './controllers/record.js';

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
], newRecord)

// get all records
app.get('/record', getAllRecords)

// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})