import { useState, useEffect } from 'react'
import ProjectCard from '../components/ui/ProjectCard'
import './Work.css'

function Work() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className="work-page">
      <div className="work-page__header">
        <h1 className="work-page__title">Selected Work</h1>
        <p className="work-page__subtitle">A curated collection of recent projects</p>
      </div>
      
      {loading ? (
        <div className="work-page__loading">Loading projects...</div>
      ) : (
        <div className="work-page__grid">
          {projects.map(project => (
            <ProjectCard
              key={project._id}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Work
