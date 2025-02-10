import {
    Box,
    Collapse,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Receipt } from "lucide-react";

type TransactionsProps = {
    route: string;
};

export default function Transactions({ route }: TransactionsProps) {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <Box>
            <ListItemButton
                onClick={() => setOpen((prev) => !prev)}
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    borderRadius: 2,
                    textTransform: "uppercase",
                }}
            >
                <ListItemText
                    primary="Transacciones"
                    slotProps={{
                        primary: {
                            fontWeight: "bold",
                            fontSize: "0.85rem",
                            lineHeight: "1rem",
                        },
                    }}
                />
            </ListItemButton>
            <Collapse in={open} unmountOnExit>
                <ListItemButton
                    selected={route.toLowerCase() === "/transacciones/presupuesto"}
                    component={Link}
                    to="/transacciones/presupuesto"
                >
                    <ListItemText primary="Presupuesto" />
                </ListItemButton>
                <ListItemButton
                    selected={route.toLowerCase() === "/transacciones/facturas"}
                    component={Link}
                    to="/transacciones/facturas"
                >
                    <Receipt size={16} strokeWidth={1} />
                    <ListItemText primary="Factura" />
                </ListItemButton>
                <ListItemButton
                    selected={route.toLowerCase() === "/transacciones/cierre"}
                    component={Link}
                    to="/transacciones/cierre"
                >
                    <ListItemText primary="Cierre Mensual" />
                </ListItemButton>
            </Collapse>
        </Box>
    );
}
