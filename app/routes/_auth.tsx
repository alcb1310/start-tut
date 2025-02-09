import { Box, Drawer, Typography } from "@mui/material";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    component: RouteComponent,
});

const navWidth = 240;

function RouteComponent() {
    return (
        <Box display="flex" width="100%" height="100%">
            <Box component="nav" sx={{ width: navWidth, flexShrink: 0 }}>
                <Drawer
                    variant="permanent"
                    open
                    PaperProps={{ elevation: 16 }}
                    sx={{
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: navWidth,
                            p: 1,
                            pt: 0,
                            border: "none",
                        },
                    }}
                >
                    <Box py={1} sx={{ overflow: "auto" }}>
                        <Typography>Menu</Typography>
                    </Box>
                </Drawer>
            </Box>
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
