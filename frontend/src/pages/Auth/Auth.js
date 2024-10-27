import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@mui/material'
import { GoogleLogin } from  'react-google-login';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from "./GoogleIcon";
import { AUTH } from '../../constants/actionTypes';
import { signin, signup } from '../../actions/auth';




// import "./styles.css";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


function Auth (){

   const[showPassword, setShowPassword] = useState(false)
const[isSignup, setIsSSignup] = useState(false);
const [form, setForm] = useState(initialState);

const dispatch = useDispatch();


const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if (isSignup) {
    dispatch(signup(form, navigate));


  } else {
    dispatch(signin(form, navigate));
  }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/gurus/david');
    } catch (error) {
      navigate('/');
    }
    
  };

  const googleFailure = (error) => {

  };



  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
<Container maxWidth="xs">
<Typography variant="h5"> {isSignup ? 'Sign Up' : 'Sign In'}</Typography>
<form onSubmit={handleSubmit}>
    <Grid container spacing={2}>
        {
            isSignup && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half={6} />
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
               
            )
        }
         <Input name="email" label="Email Adresse" handleChange={handleChange} type="email" />
         <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
         { isSignup && <Input name="confirmPassword" label="Wiederhole Password" handleChange={handleChange} type="password" /> }
    </Grid>
    <GoogleLogin 
    clientId="145493827917-3leap8j9tp9aofr6p8vapu6cnvee9ucn.apps.googleusercontent.com"
    render={(renderProps) => (
      <Button className="googleButton" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon />}>Google Sign In</Button>
    )}
    onSuccess={googleSuccess}
    onFailure={googleFailure}
    cookiePolicy="single_host_origin"
    />
    <Button type="submit" fullWidth variant="contained">
         {isSignup ? 'Sign Up' : 'Sign in'}
    </Button>
    <Grid container justify="flex-end">
        <Grid item>
<Button onClick={switchMode}>
                { isSignup ? "Hast du einen Account? Sign in" : "Hast du keinen? Registrier dich kostenlos"}
              </Button>

        </Grid>
    </Grid>


</form>
    </Container>
  );
}

export default Auth;
