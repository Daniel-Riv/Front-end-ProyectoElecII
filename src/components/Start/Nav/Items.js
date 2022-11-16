import React, { useState } from 'react';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
} from '@mui/material';

import BookIcon from '@mui/icons-material/Book';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { ModalUpdate } from '../../Matters/ModalUpdate';
import { ModalAdd } from '../../Activity/Modal/ModalAdd';

export const Items = ({ id, name, getMatters, setCustomAlert, setId,activities,getActivities }) => {
  const [open, setOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [addAcModal, setAddAcModal] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);


  const deleteMatter = async id => {
    try {
      const response = await fetch(`http://localhost:5000/api/matter/delete/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      setCustomAlert({
        type: 'success',
        message: "Materia eliminada correctamente",
      });

      getMatters();
    } catch (error) {
      console.log(error);
      setCustomAlert({
        type: 'error',
        message: 'Error en el servidor',
      });
    }
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          setId(id);
        }}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={name} />
            <DeleteIcon onClick={() => deleteMatter(id)} />
            <UpgradeIcon onClick={handleOpen} />
            <AddCircleOutlinedIcon  onClick={handleOpenAdd}/>
          </Grid>
        </ListItemButton>
      </ListItem>
      <ModalUpdate
        open={open}
        handleClose={handleClose}
        updateModal={updateModal}
        getMatters={getMatters}
        setCustomAlert={setCustomAlert}
        id={id}
        name={name}
      />
      <ModalAdd 
      open={openAdd}
      handleClose={handleCloseAdd}
      addAcModal={addAcModal}
      getActivities={getActivities}
      setCustomAlert={setCustomAlert}
      id={id}
      />
    </>
  );
};
