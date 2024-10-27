import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetpassword } from "../../actions/auth";
import * as api from '../../api/index.js';


const initialState = {
  password: "",
  confirmPassword: "",
};


function ResetPassword (){
    const [searchParams] = useSearchParams();
    const resetpasswordtoken = searchParams.get("resetpasswordtoken");
    const [wrongPasswordRegister, setwrongPasswordRegister] = useState(false);
    const [showPasswordRegister, setshowPasswordRegister] = useState(false);

    const [form, setForm] = useState(initialState);

    const dispatch = useDispatch();

    const successMessage = useSelector((state) => state.auth.successMessage);
  
    const errorMessage = useSelector((state) => state.auth.errorMessage);
  

  const [userEnteredPassword, setUserEnteredPassword] = useState('');
  const [userEnteredRepeatPassword, setUserEnteredRepeatPassword] = useState('');

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setwrongPasswordRegister(false);
  };


  const setUserInsertedPassword = async (e)  =>  {
    e.preventDefault();
    if (form.password == form.confirmPassword) {
      setwrongPasswordRegister(false);
      dispatch(resetpassword({resetpasswordtoken, password: userEnteredPassword}));
      
      // await api.resetpassword({resetpasswordtoken, password: userEnteredPassword});
    } else {
      setwrongPasswordRegister(true);
      return;
    }
  };
  return (
      <div>
          <h2> Type in New Password</h2>
          <form onSubmit={setUserInsertedPassword}>
          <input
              name="password"
              className={`login-input ${
                wrongPasswordRegister ? " invalid" : ""
              }`}
              type={showPasswordRegister ? "text" : "password"}
              placeholder="Passwort"
              onChange={onChange}
              required
            />
            <input
              name="confirmPassword"
              className={`login-input ${
                wrongPasswordRegister ? " invalid" : ""
              }`}
              type={showPasswordRegister ? "text" : "password"}
              placeholder="Wiederhole Password"
              onChange={onChange}
              required
            />
            <button type="submit">
              Bestätigen
            </button>
            {wrongPasswordRegister ? <span className="login-span-passwort-wrong">Passwörter stimmen nicht überein.</span> : <span className="login-span-passwort-wrong"></span> }
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

      </div>
  );
}

export default ResetPassword;