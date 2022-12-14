import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ModalBase } from '../../Matters/ModalBase';
import { Box, Grid, TextField } from '@mui/material';
import { useForm } from '../../../hook/useForm';

const MainContainer = ({ children }) => <Box>{children}</Box>;

export const ModalUpdate = ({
  open,
  handleClose,
  id: idUpdate,
  dateEnd: end,
  dateStart: start,
  description: desc,
  gradeActivity: gradeAc,
  name: named,
  getActivities,
  setCustomAlert,
  getPartial
}) => {
  const [dateStartState, setDateStartState] = useState(start);
  const [dateEndState, setDateEndState] = useState(end);


  const actionDateStart = dateStart => {
    setDateStartState(dateStart);
  };
  const actionDateEnd = dateEnd => {
    setDateEndState(dateEnd);
  };

  const [formValues, handleInputChange, reset] = useForm({
    id: idUpdate,
    dateEnd: end,
    dateStart: start,
    description: desc,
    gradeActivity: gradeAc,
    name: named,
  });

  const { id, dateEnd, dateStart, description, gradeActivity, name } =
    formValues;

  const updateActivity = async e => {
    e.preventDefault();
    if (
      dateEnd !== '' &&
      dateStart !== '' &&
      description !== '' &&
      gradeActivity !== '' && 
      gradeActivity <= 5 && 
      gradeActivity >= 0 &&
      name !== ''
    ) {
      try {
        const response = await fetch(
          `https://api-proyect-electivaii.herokuapp.com/api/activity/update/${id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              dateEnd: dateEndState,
              dateStart: dateStartState,
              description,
              gradeActivity,
              name,
            }),
          }
        );
        const data = await response.json();
        

        setCustomAlert({
          type: 'success',
          message: 'Actividad actualizada correctamente',
        });

        getActivities();
        getPartial();
        reset();
        handleClose();
      } catch (error) {
        console.log(error);
        setCustomAlert({
          type: 'error',
          message: 'Error en el servidor',
        });
      }
    }else{
        setCustomAlert({
            type: 'error',
            message: 'La nota debe estar entre 0 y 5',
        });
    }
  };

  return (
    <ModalBase
      titleText='Actualizar'
      subTitleText={`Actualizar actividad ${name}`}
      isOpen={open}
      buttonText1='Cancelar'
      buttonText2='Actualizar'
      actionButton2={updateActivity}
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
              <Grid item xs={12} md={12} sx={{ m: 1 }}>
                <TextField
                  label='Nombre de la materia'
                  variant='outlined'
                  name='name'
                  value={name}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ m: 1 }}
                />
                <TextField
                  label='Descripci??n'
                  variant='outlined'
                  name='description'
                  value={description}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ m: 1 }}
                />
                <TextField
                  label='Nota de la actividad'
                  variant='outlined'
                  name='gradeActivity'
                  value={gradeActivity}
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
                      dateStartState !== ''
                        ? dateStartState
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
                    label='Fecha de finalizaci??n'
                    variant='outlined'
                    name='dateEnd'
                    value={
                      dateEndState !== ''
                        ? dateEndState
                        : dayjs(dateEnd).format('YYYY-MM-DD')
                    }
                    onChange={actionDateEnd}
                    fullWidth
                    sx={{ m: 1 }}
                    renderInput={params => (
                      <TextField name='dateEnd' {...params} />
                    )}
                  />
                </LocalizationProvider>
                </Grid>
                
                {/* <TextField
                  label='Fecha de finalizaci??n'
                  variant='outlined'
                  name='dateEnd'
                  value={dayjs(dateEnd).format('YYYY-MM-DD')}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ m: 1 }}
                /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainContainer>
    </ModalBase>
  );
};
