import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          &copy; {year} Sketchy. All rights reserved.
        </p>
        <p className="footer__credit">
          Inspired by <a href="https://www.xkalicrowe.com" target="_blank" rel="noreferrer">Xkali Crowe</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
