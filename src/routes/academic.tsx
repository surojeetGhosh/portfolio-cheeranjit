import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/academic')({
  component: Academic,
})

function Academic() {
  return <div>Academic</div>;
}
