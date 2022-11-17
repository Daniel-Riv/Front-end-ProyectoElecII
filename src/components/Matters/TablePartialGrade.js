import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TablePartialGrade = ({grade}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                grade.activities.map((activity) => (
                        <TableCell align="right">{activity.name}</TableCell>
                    ))
            }
            <TableCell align="right">Progreso</TableCell>
            <TableCell align="right">Nota</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          {
                grade.activities.map((activity) => (
                        <TableCell align="right">{activity.gradeActivity}</TableCell>
                    ))
            }
            <TableCell align="right">{grade.progressMin}</TableCell>
            <TableCell align="right">{grade.partial}</TableCell>
            <TableCell align="right">{grade.message}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
