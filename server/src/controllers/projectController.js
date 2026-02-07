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
