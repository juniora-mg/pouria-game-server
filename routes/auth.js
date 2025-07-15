import express from 'express'
import { body } from 'express-validator';

import { login, register } from '../controllers/auth.js';

const router = express.Router()

// login
router.post('/login', [
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required')
  ], login);
  
// register
router.post('/register', [
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required'),
    body('record').notEmpty().withMessage('record is required')
  ], register);
  
export default router