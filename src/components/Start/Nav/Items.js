import React, { useState } from 'react';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';

export const Items = ({ id, name }) => {

  const deleteMatter = async id => {
    const response = await fetch(
      `http://localhost:5000/api/matter/delete/${id}`,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={name} />
            <DeleteIcon onClick={() => deleteMatter(id)} />
            <UpgradeIcon  />
            {/* <ListItemText secondary={'Lorem insert line Daniel RIVAS 123'}/> */}
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
