export default function AnimatedBrand() {
  return (
    <p className="animated-brand text-h3">
      <span className="motion-sr-only">Lucas Souza</span>
      <span className="brand-visual" aria-hidden="true">
        <span className="brand-reserve">{'<Lucas Souza />'}</span>
        <span className="brand-layout">
          <span>{'<'}</span>
          <span className="brand-name">Lucas Souza</span>
          <span>{'/>'}</span>
        </span>
      </span>
    </p>
  )
}
