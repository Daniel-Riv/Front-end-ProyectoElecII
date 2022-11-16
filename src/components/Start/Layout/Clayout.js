import { useState, useEffect } from 'react';
import {
  Box,
  Toolbar
} from '@mui/material';

import { NavbarC } from '../Nav/NavbarC';
import { SiderBar } from '../Nav/SiderBar';

const drawerWidth = 300;

export const Clayout = ({ children, matters, getMatters, setId,getActivities,activities }) => {

  return (
    <Box>
      <NavbarC
        drawerWidth={drawerWidth}
        matters={matters}
        getMatters={getMatters}
      />
      <SiderBar
        drawerWidth={drawerWidth}
        matters={matters}
        activities={activities}
        getMatters={getMatters}
        getActivities={getActivities}
        setId={setId}
      />
      <Box component='main'   sx={{width:{sm:`calc(100% - ${drawerWidth}px)`},
                                          ml:{sm:`${drawerWidth}px`},
                                          xs:{sm: `${drawerWidth}px`}}} >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}