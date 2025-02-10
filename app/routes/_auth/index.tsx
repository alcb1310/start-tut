import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <Typography variant="h3" component="h1" color="primary">
                Hello "/"!
            </Typography>
        </div>
    );
}
