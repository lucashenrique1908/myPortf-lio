export default function TextReveal({ children, index = 0 }) {
  return <span className="motion-text" style={{ '--motion-index': index }}>{children}</span>
}
