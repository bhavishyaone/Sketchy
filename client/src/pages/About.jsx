import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import './About.css'

function About() {
  return (
    <motion.section 
      className="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-page__container">
        <div className="about-page__image-col">
          <img 
            src="https://images.unsplash.com/photo-1544168190-79c15427d14d?q=80&w=2588&auto=format&fit=crop" 
            alt="Portrait of the artist" 
            className="about-page__img"
          />
        </div>
        
        <div className="about-page__content-col">
          <h1 className="about-page__title">
            Designing<br />
            <em>with intent</em>
          </h1>
          <div className="about-page__body">
            <p>
              I am a multi-disciplinary designer and creative director based in the digital realm.
              My work explores the intersection of brutalism and modern elegance, aiming to 
              create experiences that are not only functional but emotionally resonant.
            </p>
            <p>
              With over a decade of experience partnering with global brands and independent 
              visionaries, I specialize in bringing unseen possibilities to the surface.
            </p>
          </div>
          
          <div className="about-page__actions">
            <Button href="/contact" variant="primary">Let's Collaborate</Button>
            <Button href="/work" variant="outline">View My Work</Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
