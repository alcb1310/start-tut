import Sidebar from "@/components/sidebar/Sidebar";
import { Box, Drawer, Typography } from "@mui/material";
import { createFileRoute, Outlet, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    component: RouteComponent,
    loader: (params) => {
        return {
            location: params.location.pathname,
        };
    },
});

const navWidth = 240;

function RouteComponent() {
    const loader = Route.useLoaderData();

    return (
        <Box display="flex" width="100%" height="100%">
            <Sidebar navWidth={navWidth} location={loader.location} />
            <Box
                component="main"
                flexGrow={1}
                display="flex"
                flexDirection="column"
                px={3}
                py={1}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
