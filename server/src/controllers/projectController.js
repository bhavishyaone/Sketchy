import Project from '../models/Project.js'

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort('-createdAt')
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (project) {
      res.json(project)
    } else {
      res.status(404).json({ message: 'Project not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
export const createProject = async (req, res) => {
  try {
    const { title, category, image, description, link, tags } = req.body

    if (!title || !category || !image) {
      return res.status(400).json({ message: 'Title, category, and image are required' })
    }

    const project = await Project.create({
      title,
      category,
      image,
      description,
      link,
      tags: tags || [],
    })

    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }
    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}
