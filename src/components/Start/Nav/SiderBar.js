import { useEffect, useState } from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    Toolbar,
    Typography,
    Snackbar
} from "@mui/material"

import { Items } from "./Items";

export const SiderBar = ({ drawerWidth = 240 }) => {

    const [matters, setMatter] = useState([]);
    const [customAlert, setCustomAlert] = useState({
        type: null,
        message: null,
    });

    const handleCloseAlert = () => setCustomAlert({ type: null, message: null });

    const getMatters = async () => {
        const response = await fetch('http://localhost:5000/api/matter/get');
        const data = await response.json();
        const { matters } = data;
        console.log(matters);
        setMatter(matters);
    }

    useEffect(() => {
        getMatters();
    }, []);

    return (
        <Box component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth
                    }
                }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Materias Agregadas</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        matters.map((matter) => (
                            <Items
                                key={matter._id}
                                id={matter._id}
                                getMatters={getMatters}
                                setCustomAlert={setCustomAlert}
                                handleCloseAlert={handleCloseAlert}
                                {...matter}
                            />
                        ))
                    }
                </List>
            </Drawer>

            <Snackbar
                open={customAlert.type !== null ? true : false}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                message={customAlert.message}
            />
        </Box>
    )
}
