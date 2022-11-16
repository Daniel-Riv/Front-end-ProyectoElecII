import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Divider, ListItemIcon } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { ModalUpdate } from './Modal/ModalUpdate';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ItemActivity = ({id,dateEnd,dateStart,description,gradeActivity,name,getActivities,setCustomAlert}) => {

    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const [updateModal, setUpdateModal] = useState([]);


    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleDelete = async() => {
        try {
            const response = await fetch(`http://localhost:5000/api/activity/delete/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            setCustomAlert({
                type: 'success',
                message: "Actividad eliminada correctamente",
              });

            getActivities();
            
        } catch (error) {
            console.log(error);
            setCustomAlert({
                type: 'error',
                message: 'Error en el servidor',
              });
        }

    }


  return (

    <>
    <Card sx={{ maxWidth: 380, m:2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        title={name}
        subheader={`La fecha de creacion de la actividad es:  ${dateStart}`}
      />
      <CardContent>
        <Typography>
            Descripcion de la actividad:
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{m:1}}>
          {description}
        </Typography>
        <Divider />
        <Typography>
        {`La fecha de inicio de la actividad es:`}
        </Typography>
        <ListItemIcon alignItems="center">
            <EventIcon sx={{m:3}}/>
            <Typography variant="body2" color="text.secondary" sx={{m:2}}>
            AAA-MMM-DDD: <br/>
            h:ss
        </Typography>
        <Typography sx={{m:2, fontWeight: 'bold'}}>
            {dateStart}
        </Typography >
        </ListItemIcon>
        
        <Divider />
            <Typography>
            {`La fecha  Limite de la actividad es:`}
            </Typography>
        <ListItemIcon>
            <EventIcon sx={{m:3}}/>
            <Typography variant="body2" color="text.secondary"  sx={{m:1}}>
            Año/Mes/Dia: <br/>
            h:ss
        </Typography>
        <Typography sx={{m:2, fontWeight: 'bold'}}>
            {dateEnd}
        </Typography >
        </ListItemIcon>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete">
          <DeleteForeverSharpIcon onClick={()=> handleDelete(id)}/>
        </IconButton>
        <IconButton aria-label="update">
          <EditOutlinedIcon onClick={handleOpen}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
    <ModalUpdate 
    open={open}
    handleClose={handleClose}
    updateModal={updateModal}
    getActivities={getActivities}
    setCustomAlert={setCustomAlert}
    id={id}
    dateEnd={dateEnd}
    dateStart={dateStart}
    description={description}
    gradeActivity={gradeActivity}
    name={name}
    />
    </>
    
  )
}
