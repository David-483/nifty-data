import './login.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/auth";
import { useNavigate } from "react-router-dom";


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

function NewMember() {
    const [form, setForm] = useState(initialState);
    const [wrongPasswordRegister, setwrongPasswordRegister] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const errorMessageRegister = useSelector((state) => state.auth.errorMessageRegister);


    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setwrongPasswordRegister(false);
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if (form.password == form.confirmPassword) {
            setwrongPasswordRegister(false);
            dispatch(signup(form, navigate));
        } else {
            setwrongPasswordRegister(true);
        }
        // if (isSignup) {
        // } else {
        //   dispatch(signin(form, navigate));
        // }
    };


    return (
        <div className='loginBody'>
            <div className='loginContainer'>
            <p className='boxTextHead'>Kostenfreies Konto erstellen</p>

              
                   

                          <div className='loginBox'>
                          <form
                        action="#"
                        onSubmit={handleSubmitRegister}
                    >
                    <div className='nameInputContainer'>
                    <input name="firstName" style={{width:"50%"}} onChange={onChange} placeholder="Vorname" required></input>
                    <input name="lastName" style={{width:"50%"}} onChange={onChange} placeholder="Nachname" required></input>
                    </div>
                    <input name="email" type="email" onChange={onChange} placeholder="E-Mail-Adresse" required></input>
                    <div className='nameInputContainer'>
                    <input name="password" style={{width:"50%"}} onChange={onChange} type="password" placeholder="Passwort festlegen" required></input>
                    <input name="confirmPassword" style={{width:"50%"}} onChange={onChange} type="password" placeholder="Passwort bestätigen" required></input>
                    </div>
                    <button className='NiftyButton' style={{fontSize:"12px"}} type="submit">Kostenfreies Konto erstellen</button>
                    </form>

                    {wrongPasswordRegister ? (
                            <span className="login-span-passwort-wrong">
                                Passwörter stimmen nicht überein.
                            </span>
                        ) : (
                            <span className="login-span-passwort-wrong"></span>
                        )}

{errorMessageRegister && (
                            <span className="login-span-passwort-wrong">
                                {" "}
                                {errorMessageRegister}{" "}
                            </span>
                        )}

                    <div className='Line'></div>

<p style={{textAlign:"center", fontWeight:"900", color: "white", marginTop:"40px", marginBottom:"-15px"}}> Du hast bereits ein Konto?</p>
<Link style={{textAlign:"center"}}  to="/loginPage"> <p className="registerText" > Jetzt anmelden</p></Link>

                </div>
            </div>
        </div>
    );
}

export default NewMember;