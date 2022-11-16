import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import { ModalAdd } from '../../Matters/ModalAdd';

const actions = [
  { icon: <SaveIcon />, name: 'Agregar' },
  { icon: <PrintIcon />, name: 'Ver' },
];
export const Icon = ({ getMatters }) => {

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [addMmodal, setAddModal] = useState({
    open: false,
    action: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModal = (value) => {
    setAddModal({
      open: true,
      action: value,
    });
  };

  const handleCloseModal = () => setAddModal(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel=''
        sx={{ position: 'fixed', bottom: 16, right: 50 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={
              action.name === "Agregar"
                ? () => handleOpenModal('Añadir')
                : () => handleOpenModal('Ver')
            }
          />
        ))}
      </SpeedDial>
      <ModalAdd
        openModal={addMmodal.open}
        value={addMmodal.action}
        handleCloseModal={handleCloseModal}
        addMmodal={addMmodal}
        getMatters={getMatters}
      />
    </>
  );
};
