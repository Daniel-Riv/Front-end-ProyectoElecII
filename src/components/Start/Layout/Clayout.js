import { Box, Toolbar } from '@mui/material';
import { NavbarC } from '../Nav/NavbarC';
import { SiderBar } from '../Nav/SiderBar';


const drawerWidth = 240;

export const Clayout = ({children}) => {
   
  return(
    <Box>
        <NavbarC  drawerWidth={drawerWidth}/>
        <SiderBar drawerWidth={drawerWidth}/>
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}


 
  




