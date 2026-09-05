function SectionTitle({ label, title }) {
  return (
    <div className="section-title">
      <span className="section-title__label text-label">{label}</span>
      <h2 className="section-title__heading text-h2">{title}</h2>
    </div>
  )
}

export default SectionTitle
