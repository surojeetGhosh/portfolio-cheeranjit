import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute('/')({
    component: About
})

function About() {
  return <div>About</div>;
}
