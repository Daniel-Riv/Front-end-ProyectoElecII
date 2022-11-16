import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useEffect, useState } from "react";
import { Items } from "./Items";


export const SiderBar = ({drawerWidth=240}) => {

    const [matters, setMatter] = useState([]);
    console.log(matters);


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
        sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}
        >
            <Drawer variant="permanent"
                    open
                    sx={{
                        display:{xs: 'block'},
                    '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
                    }}>
                        <Toolbar>
                            <Typography variant='h6' noWrap component='div'>Materias Agregadas</Typography>
                        </Toolbar>
                        <Divider/>
                        <List>
                            {
                                matters.map((matter)=>(
                                    <Items key={matter._id} id={matter._id} {...matter}/>
                                    
                                ))
                            }
                        </List>

            </Drawer>

    </Box>
  )
}
