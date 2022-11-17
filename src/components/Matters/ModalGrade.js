import {
  Box,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { ModalBase } from './ModalBase';
import { TablePartialGrade } from './TablePartialGrade';


const MainContainer = ({ children }) => <Box>{children}</Box>;

export const ModalGrade = ({id,open,handleClose,getActivities,name, grade }) => {

  return (
    <ModalBase
        titleText= {`Nota parcial de la materia ${name}`}
        isOpen={open}
        buttonText1='Cerrar'
        buttonText2= ''
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
                  <TablePartialGrade grade={grade}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainContainer>
      </ModalBase>
  )
}
