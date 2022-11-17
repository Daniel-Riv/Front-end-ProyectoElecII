import { useEffect, useState } from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    Toolbar,
    Typography,
    Snackbar,
    Alert
} from "@mui/material"

import { Items } from "./Items";

export const SiderBar = ({ drawerWidth = 300, matters, getMatters, setId,getActivities,activities,grade,getPartial }) => {


    const [customAlert, setCustomAlert] = useState({
        type: null,
        message: null,
    });

    const handleCloseAlert = () => setCustomAlert({ type: null, message: null });

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
                                setId={setId}
                                getActivities={getActivities}
                                gradePartial={grade}
                                getPartial={getPartial}
                                {...matter}
                                {...activities}
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
