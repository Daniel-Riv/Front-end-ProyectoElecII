import { ModalBase } from './ModalBase';
import {
  Box,
  Grid,
  TextField
} from '@mui/material';
import { useForm } from '../../hook/useForm';

const MainContainer = ({ children }) => <Box>{children}</Box>;

export const ModalUpdate = ({ open, handleClose, id: idUpdate, name: nameUpdate, getMatters, setCustomAlert,getPartial }) => {

  const [formValues, handleInputChange, reset] = useForm({
    name: nameUpdate,
    id: idUpdate
  });

  const { id, name } = formValues;

  const updateMatter = async (e) => {
    e.preventDefault();
    if (name !== "") {
      try {
        const response = await fetch(`https://api-proyect-electivaii.herokuapp.com/api/matter/update/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
          }),
        });
        const data = await response.json();

        setCustomAlert({
          type: 'success',
          message: 'Materia actualizada correctamente',
        });

        getMatters();
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
    }
  }

  return (
    <>
      <ModalBase
        titleText='Actualizar materia'
        subTitleText={`Actualizar ${name}`}
        isOpen={open}
        buttonText1='Cancelar'
        buttonText2='Actualizar'
        actionButton2={updateMatter}
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
                  <TextField label='Nombre de la materia'
                    variant='outlined'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    fullWidth />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainContainer>
      </ModalBase>
    </>
  )
}
