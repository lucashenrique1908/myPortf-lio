function Button({ children, variant = 'primary', onClick, href, ...props }) {
  const className = `button button--${variant}`

  if (href) {
    return <a className={className} href={href} onClick={onClick} {...props}>{children}</a>
  }

  return (
    <button type="button" className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
