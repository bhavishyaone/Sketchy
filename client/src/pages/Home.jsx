import { motion } from 'framer-motion'
import './Home.css'

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="home">
        <div className="home__hero">
          <div className="home__hero-text">
            <p className="home__eyebrow">Creative Portfolio</p>
            <h1 className="home__headline">
              Art that lives<br />
              <em>at the edge</em>
            </h1>
            <p className="home__subtext">
              Visual storytelling, editorial design, and digital experiences
              that push the boundaries of creative expression.
            </p>
            <a href="/work" className="home__cta">
              View Work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
