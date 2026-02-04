import './ProjectCard.css'

function ProjectCard({ title, category, image }) {
  return (
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
  )
}

export default ProjectCard
