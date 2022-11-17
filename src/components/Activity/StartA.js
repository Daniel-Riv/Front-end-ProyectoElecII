import {
  Grid,
  Snackbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { ItemActivity } from "./ItemActivity";

export const StartA = ({ activities,getActivities,getPartial }) => {

  const [customAlert, setCustomAlert] = useState({
    type: null,
    message: null,
});

const handleCloseAlert = () => setCustomAlert({ type: null, message: null });


  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {
          activities.map((activity) => (
            <ItemActivity  key={activity._id} id={activity._id} getActivities={getActivities} setCustomAlert={setCustomAlert}
            handleCloseAlert={handleCloseAlert} getPartial={getPartial} {...activity} />
          ))
        }
      </Grid>
      <Snackbar
        open={customAlert.type !== null ? true : false}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        message={customAlert.message}/>
    </>
  )
}
