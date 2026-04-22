import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // URL to image
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
  }
}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema)
export default Project
