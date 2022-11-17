import React, { useState } from 'react';
import { useForm } from '../../../hook/useForm';
import { ModalBase } from '../../Matters/ModalBase';
import { Box, Grid, TextField } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const MainContainer = ({ children }) => <Box>{children}</Box>;

export const ModalAdd = ({
  open,
  handleClose,
  id: idAdd,
  setCustomAlert,
  getActivities,
  getPartial,
}) => {



  const [dateStartS, setDateStartS] = useState(dayjs());
  const [dateEndS, setDateEndS] = useState(dayjs());

  const actionDateStart = dateStart => {
    setDateStartS(dateStart);
  };

  const actionDateEnd = dateEnd => {
    setDateEndS(dateEnd);
  };

  const [formValues, handleInputChange, reset] = useForm({
    id: idAdd,
    name: '',
    description: '',
    dateStart: dateStartS,
    dateEnd: dateEndS,
  });

  const { id, name, description, dateStart, dateEnd } = formValues;

  const addActivity = async e => {
    e.preventDefault();
    if (name !== '' && description !== '' ) {
      try {
        const response = await fetch(
          `https://api-proyect-electivaii.herokuapp.com/api/activity/createa`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idMatter: id,
              name: name,
              description: description,
              dateStart: dateStartS,
              dateEnd: dateEndS,
            }),
          }
        );
        const data = await response.json();

        getActivities();
        getPartial();
        reset();
        handleClose();
      } catch (error) {
        setCustomAlert({
          open: true,
          message: 'Error al agregar actividad',
          severity: 'error',
        });
      }
    } else {
      setCustomAlert({
        open: true,
        message: 'Faltan campos por llenar',
        severity: 'warning',
      });
    }
  };

  return (
    <>
      <ModalBase
        titleText='Crear Actividad'
        isOpen={open}
        buttonText1='Cancelar'
        buttonText2='Agregar'
        actionButton2={addActivity}
        typeModal={1}
        onClose={() => {
          handleClose();
        }}
      >
        <MainContainer>
          <Grid>
            <Grid>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} md={12}>
                  <TextField
                    label='Nombre de la actividad'
                    variant='outlined'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{ m: 1 }}
                  />
                  <TextField
                    label='descripcion de la actividad'
                    variant='outlined'
                    name='description'
                    value={description}
                    onChange={handleInputChange}
                    fullWidth
                    sx={{ m: 1 }}
                  />
                  <Grid sx={{m:1}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} locale='es'>
                  <DatePicker
                    label='Fecha de inicio'
                    variant='outlined'
                    name='dateStart'
                    value={
                      dateStartS !== ''
                        ? dateStartS
                        : dayjs(dateStart).format('YYYY-MM-DD')
                    }
                    onChange={actionDateStart}
                    fullWidth
                    sx={{ m: 1 }}
                    renderInput={params => (
                      <TextField name='dateStart' {...params} />
                    )}
                  />
                </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs} locale='es'>
                  <DatePicker
                    label='Fecha de finalización'
                    variant='outlined'
                    name='dateEnd'
                    value={
                      dateEndS !== ''
                        ? dateEndS
                        : dayjs(dateEnd).format('YYYY-MM-DD')
                    }
                    onChange={actionDateEnd}
                    fullWidth
                    renderInput={params => (
                      <TextField name='dateEnd' {...params} />
                    )}
                  />
                </LocalizationProvider>
                    
                  </Grid>
                    
                  
                
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainContainer>
      </ModalBase>
    </>
  );
};
