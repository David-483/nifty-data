import React, { useState, useEffect } from "react";
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import { Button, Paper, Grid, Typography, Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';



function LoggedinInfo (){
    const navigate = useNavigate();
    
    const moveToSignIn = () => {
        navigate('/auth');
      }
 return (
     <Grid   container
     spacing={0}
     direction="column"
     alignItems="center"
     justifyContent="center">
         <Paper className={"borderRadius: 25"} elevation={15}>
        <Box p={8}>
        <DoNotTouchIcon />
          <Typography variant="h5">Bereich nur für eingeloggte User!</Typography>
          <Button onClick={moveToSignIn} fullWidth variant="contained"> Noch keinen Account? Hier kostenlos registrieren! </Button>
          <DoNotTouchIcon />
        </Box>
      </Paper>
     </Grid>
  );
}

export default LoggedinInfo;
