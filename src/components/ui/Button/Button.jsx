function Button({ children, variant = 'primary', onClick }) {
  return (
    <button type="button" className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
