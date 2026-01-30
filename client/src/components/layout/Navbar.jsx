import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          Sketchy
        </NavLink>
        <nav className="navbar__links">
          <NavLink to="/work" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
