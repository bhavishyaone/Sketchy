import express from 'express'
import { submitMessage, getMessages } from '../controllers/contactController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(submitMessage).get(protect, getMessages)

export default router
