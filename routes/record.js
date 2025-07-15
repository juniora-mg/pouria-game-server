import express from 'express'
import { body } from 'express-validator'

import { newRecord, getAllRecords } from '../controllers/record.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router()

// set new record
router.post('/new', [
    body('record').notEmpty().isNumeric().withMessage('record is required and must be numeric'),
    authMiddleware
  ], newRecord)
  
// get all records
router.get('/', getAllRecords)

export default router