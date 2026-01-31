import express from 'express'
import cors from 'cors'

const app = express()

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Sketchy API is running' })
})

// TODO: Mount route modules here as we build them out

export default app
