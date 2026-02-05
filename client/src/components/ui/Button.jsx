import './Button.css'

function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const classes = `btn btn--${variant} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
