import express from 'express'
import { submitMessage, getMessages, deleteMessage } from '../controllers/contactController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(submitMessage).get(protect, getMessages)
router.route('/:id').delete(protect, deleteMessage)

export default router
