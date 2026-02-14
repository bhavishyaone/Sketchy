import Message from '../models/Message.js'

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
export const submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide all required fields' })
    }

    const newMessage = await Message.create({
      name,
      email,
      message
    })

    res.status(201).json({
      message: 'Message sent successfully',
      data: newMessage
    })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({}).sort('-createdAt')
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}
