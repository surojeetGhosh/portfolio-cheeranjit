import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
    component: Skills,
});
export default function Skills() {
    return <div>Skills</div>;
}
