function SectionTitle({ label, title, id }) {
  return (
    <div className="section-title">
      <span className="section-title__label text-label">{label}</span>
      <h2 id={id} className="section-title__heading text-h2">{title}</h2>
    </div>
  )
}

export default SectionTitle
