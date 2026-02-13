import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetails.css'

function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`)
        if (!response.ok) throw new Error('Not found')
        const data = await response.json()
        setProject(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    
    fetchProject()
  }, [id])

  if (loading) return <div className="project-details__loading">Loading...</div>
  if (error || !project) return <div className="project-details__error">Project not found. <Link to="/work">Back to Work</Link></div>

  return (
    <article className="project-details">
      <div className="project-details__hero">
        <img src={project.image} alt={project.title} className="project-details__image" />
      </div>
      
      <div className="project-details__content">
        <div className="project-details__header">
          <p className="project-details__category">{project.category}</p>
          <h1 className="project-details__title">{project.title}</h1>
        </div>
        
        <div className="project-details__body">
          <p className="project-details__description">
            {project.description || 'A comprehensive exploration of form, space, and color. This project reflects the core tenets of our design philosophy—stripping away the unnecessary to reveal pure structural elegance.'}
          </p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-details__link">
              Visit Live Project ↗
            </a>
          )}
        </div>
        
        <div className="project-details__footer">
          <Link to="/work" className="project-details__back">← Back to Portfolio</Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectDetails
