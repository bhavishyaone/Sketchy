import express from 'express'
import cors from 'cors'
import projectRoutes from './routes/projectRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

const app = express()

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Sketchy API is running' })
})

// Mount Routes
app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)

export default app
