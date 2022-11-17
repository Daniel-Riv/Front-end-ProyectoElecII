import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useEffect } from 'react';

export const PopperA = ({idP,id,openP,anchorEl,popover}) => {

    const {color,message} = popover;

  return (
    <Popper id={idP} open={openP} anchorEl={anchorEl} popover={popover}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', width:'230px' }}>
            <Typography sx={{ color: color}}>{message}</Typography>
        </Box>
      </Popper>
  )
}
