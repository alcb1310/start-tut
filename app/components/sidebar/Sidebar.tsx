import { Box, Drawer, Typography } from "@mui/material";
import Transactions from "./menu/transactions/Transactions";

type SidebarProps = {
    navWidth: number;
    location: string;
};

export default function Sidebar({ navWidth = 300, location }: SidebarProps) {
    return (
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
                    <Transactions route={location} />
                </Box>
            </Drawer>
        </Box>
    );
}
