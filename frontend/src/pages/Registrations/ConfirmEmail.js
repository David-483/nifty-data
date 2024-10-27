import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

function ConfirmEmail (){
  const [searchParams] = useSearchParams();
  const isfromConfirmedEmail = searchParams.get("isfromConfirmedEmail");
  const isEmailconfirmed = searchParams.get("isEmailconfirmed");

  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  useEffect(() => {
    if(isfromConfirmedEmail){
      user.isEmailconfirmed = isEmailconfirmed === 'true'

      dispatch({ type: "AUTH", data: user });
    }
  },[]);

  setTimeout(function() {
    window.location.replace('/home');
  }, 5000);



  return (
      <div>
          <h1> E-Mail erfolgreich bestätigt...</h1>
          <h3> Du wirst sofort weitergeleitet...</h3>
      </div>
  );
}

export default ConfirmEmail;