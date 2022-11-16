import { useState } from 'react';
import {
  Box,
  Grid,
  TextField
} from '@mui/material';
import { ModalBase } from './ModalBase';
import { useForm } from '../../hook/useForm';

const MainContainer = ({ children }) => <Box>{children}</Box>;

export const ModalAdd = ({ openModal, handleCloseModal, addMmodal, value, getMatters }) => {

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
  });

  const { name } = formValues;

  const addMatter = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/matter/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await response.json();
    getMatters();
    reset();
    handleCloseModal();
  }

  return (
    <>
      <ModalBase
        titleText='Agregar materia'
        subTitleText='Nombre de la materia'
        isOpen={openModal}
        buttonText1='Cancelar'
        buttonText2='Agregar'
        actionButton2={addMatter}
        typeModal={1}
        onClose={() => {
          handleCloseModal();
        }}
        value={value}
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
                  <TextField label='Nombre de la materia'
                    variant='outlined'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    fullWidth />
                  {value === "Añadir" ? "TONTO" : "Sebastisn"}
                  <h1>{value}</h1>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainContainer>
      </ModalBase>
    </>
  );
};
