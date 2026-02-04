import ProjectCard from '../components/ui/ProjectCard'
import './Work.css'

// Temporary mock data until we connect to the backend
const mockProjects = [
  {
    id: 1,
    title: 'Neon Nights',
    category: 'Editorial Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Abstract Thoughts',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Minimalist Spaces',
    category: 'Architecture Photography',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Urban Geometry',
    category: 'Visual Storytelling',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop'
  }
]

function Work() {
  return (
    <section className="work-page">
      <div className="work-page__header">
        <h1 className="work-page__title">Selected Work</h1>
        <p className="work-page__subtitle">A curated collection of recent projects</p>
      </div>
      
      <div className="work-page__grid">
        {mockProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Work
