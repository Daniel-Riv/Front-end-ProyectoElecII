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
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { useEffect, useState } from 'react';
import {  Button, Divider, ListItemIcon } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { ModalUpdate } from './Modal/ModalUpdate';
import { PopperA } from './Popper/PopperA';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

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

export const ItemActivity = ({id,dateEnd,dateStart,description,gradeActivity,name,getActivities,setCustomAlert,getPartial}) => {

    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const [updateModal, setUpdateModal] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);
    const [popover, setPopover] = useState([]);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const openP = Boolean(anchorEl);
    const idP = openP ? 'simple-popper' : undefined;

    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleDelete = async() => {
        try {
            const response = await fetch(`https://api-proyect-electivaii.herokuapp.com/api/activity/delete/${id}`, {
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

    const getAlert = async () => {
        try {
            const response = await fetch(`https://api-proyect-electivaii.herokuapp.com/api/activity/date/${id}`);
            const data = await response.json();
            setPopover(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) {
            getAlert();
        }
    }, [id])

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
        subheader={`La fecha de creacion de la actividad es:  ${dayjs(dateStart).format('DD/MM/YYYY')}`}
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
            {dayjs(dateStart).format('YYYY-MM-DD')}
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
            {dayjs(dateEnd).format('YYYY/MM/DD')}
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
        <IconButton>
            <EventBusyIcon color='error'  onClick={handleClick}/>
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
        <CardContent>
            <Typography paragraph textAlign='center'>
                Nota: <strong> { gradeActivity }</strong>
            </Typography>
        </CardContent>
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
    getPartial={getPartial}
    />
    <PopperA idP={idP} id={id} openP={openP} anchorEl={anchorEl} popover={popover}/>
    </>
    
  )
}
