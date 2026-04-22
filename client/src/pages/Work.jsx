import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ui/ProjectCard'
import './Work.css'

function Work() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

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

  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category).filter(Boolean))]
    return ['All', ...unique]
  }, [projects])

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [projects, activeCategory])

  return (
    <motion.section 
      className="work-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="work-page__header">
        <h1 className="work-page__title">Selected Work</h1>
        <p className="work-page__subtitle">A curated collection of recent projects</p>
      </div>

      {!loading && categories.length > 1 && (
        <div className="work-page__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`work-page__filter-btn${activeCategory === cat ? ' work-page__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      
      {loading ? (
        <div className="work-page__loading">Loading projects...</div>
      ) : (
        <motion.div
          key={activeCategory}
          className="work-page__grid"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {filtered.length === 0 ? (
            <p className="work-page__empty">No projects in this category yet.</p>
          ) : (
            filtered.map(project => (
              <ProjectCard
                key={project._id}
                id={project._id}
                title={project.title}
                category={project.category}
                image={project.image}
              />
            ))
          )}
        </motion.div>
      )}
    </motion.section>
  )
}

export default Work
