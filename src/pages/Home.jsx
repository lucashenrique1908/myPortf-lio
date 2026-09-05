import Button from '../components/ui/Button/Button'
import Container from '../components/ui/Container/Container'
import SectionTitle from '../components/ui/SectionTitle/SectionTitle'
import Tag from '../components/ui/Tag/Tag'

export default function Home() {
  return (
    <main className="section">
      <Container>
        <SectionTitle label="Selected Work" title="Projects" />

        <div>
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>

        <div>
          <Tag>React</Tag>
          <Tag>JavaScript</Tag>
          <Tag>Firebase</Tag>
        </div>
      </Container>
    </main>
  )
}
