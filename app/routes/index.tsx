import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <h1 className="text-blue-800 text-3xl">Hello "/"!</h1>
        </div>
    );
}
