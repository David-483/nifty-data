import { Link, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetpassword } from "../../actions/auth";
import * as api from '../../api/index.js';


function ForgetEmail (){

  const [userEnteredEmail, setUserEnteredEmail] = useState('');
  const dispatch = useDispatch();


  const successMessage = useSelector((state) => state.auth.successMessage);

  const errorMessage = useSelector((state) => state.auth.errorMessage);


  const handleSubmitForgetPassword = async (e)  =>  {
    e.preventDefault();
    dispatch(forgetpassword({email: userEnteredEmail}));
    // await api.forgetpassword({email: userEnteredEmail});
  };
 
  return (
    <div className='loginBody'>
    <div className='loginContainer'>
    <t className='boxTextHead'>Passwort vergessen</t>
    <br></br>
    <p className='boxText'>Bitte gib die E-Mail-Adresse ein, mit der du dich registriert hast. Du bekommst ein neues Passwort zugeschickt.</p>
          <form onSubmit={handleSubmitForgetPassword} >

          <input placeholder="E-Mail-Adresse" type="email"  onChange={(e)=> {setUserEnteredEmail(e.target.value)}}/>

          <button  className='NiftyButton'  style={{fontSize:"12px"}} type="submit">
              Neues Passwort anfordern
            </button>

          </form>

          {errorMessage && (
              <span className="login-span-passwort-wrong">
                {" "}
                {errorMessage}{" "}
              </span>
            )}
            {successMessage && (
              <span className="login-span-passwort-wrong">
                {" "}
                {successMessage}{" "}
              </span>
            )}

<div className='Line'></div>
<Link to="/newMember"> <p className="registerText" >Zurück zur Anmeldung</p></Link>

      </div>
      </div>
  );
}

export default ForgetEmail;

