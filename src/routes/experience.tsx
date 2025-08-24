import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experience')({
  component: Experience,
})

export default function Experience() {
  return <div>Experience</div>;
}
