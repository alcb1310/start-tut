import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="text-blue-800 text-3xl">
            <h1>Hello "/"!</h1>
        </div>
    );
}
