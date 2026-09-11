function Button({ children, variant = 'primary', onClick, href, ...props }) {
  const className = `button button--${variant}`

  if (href) {
    const external = /^(https?:|mailto:|tel:)/i.test(href)
    return <a className={className} href={href} onClick={onClick} target={external ? '_blank' : undefined} rel={external ? 'noreferrer noopener' : undefined} {...props}>{children}</a>
  }

  return (
    <button type="button" className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
