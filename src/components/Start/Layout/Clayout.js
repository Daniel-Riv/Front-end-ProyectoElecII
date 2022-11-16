import { useState, useEffect } from 'react';
import {
  Box,
  Toolbar
} from '@mui/material';

import { NavbarC } from '../Nav/NavbarC';
import { SiderBar } from '../Nav/SiderBar';

const drawerWidth = 300;

export const Clayout = ({ children, matters, getMatters }) => {

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
        getMatters={getMatters}
      />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}