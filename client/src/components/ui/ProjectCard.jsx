import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ id, title, category, image }) {
  return (
    <Link to={`/work/${id}`} className="project-card-link">
      <article className="project-card">
        <div className="project-card__image-wrapper">
          <img src={image} alt={title} className="project-card__image" loading="lazy" />
          <div className="project-card__overlay">
            <span className="project-card__view-text">View Project</span>
          </div>
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__category">{category}</p>
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard
