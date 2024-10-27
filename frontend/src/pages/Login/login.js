import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    TextField,
} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import GoogleIcon from "./GoogleIcon";
import FacebookIcon from "./FacebookIcon";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../constants/actionTypes";
import { signin, signup } from "../../actions/auth";
import { shadows } from "@mui/system";

// import "./styles.css";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const initialStateLogin = {
    email: "",
    password: "",
};

function Login() {
    const [isContainerActive, setIsContainerActive] = React.useState(false);
    const [form, setForm] = useState(initialState);
    const [formLogin, setFormLogin] = useState(initialStateLogin);
    const [wrongPasswordRegister, setwrongPasswordRegister] = useState(false);
    const [wrongPasswordLogin, setwrongPasswordLogin] = useState(false);
    const [showPasswordRegister, setshowPasswordRegister] = useState(false);

    const errorMessageLogin = useSelector((state) => state.auth.errorMessageLogin);

    const successMessageLogin = useSelector((state) => state.auth.successMessageLogin);

    const errorMessageRegister = useSelector((state) => state.auth.errorMessageRegister);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const togglePasswordView = () => {
        setshowPasswordRegister(
            (prevshowPasswordRegister) => !prevshowPasswordRegister
        );
    };

    const signUpButton = () => {
        setIsContainerActive(true);
    };
    const signInButton = () => {
        setIsContainerActive(false);
    };

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
        setwrongPasswordRegister(false);
        setwrongPasswordLogin(false);
        togglePasswordView();
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if (form.password == form.confirmPassword) {
            setwrongPasswordRegister(false);
        } else {
            setwrongPasswordRegister(true);
        }
        // if (isSignup) {
        dispatch(signup(form, navigate));
        // } else {
        //   dispatch(signin(form, navigate));
        // }
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(signin(form, navigate));
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: AUTH, data: { result, token } });
            navigate("/gurus/david");
        } catch (error) {
            navigate("/");
        }
    };

    const googleFailure = (error) => {

    };

    return (
        <div className="login-body">
            <div
                className={`login-container${isContainerActive ? " right-panel-active" : ""
                    }`}
                id="container"
            >
                <div className="login-form-container login-sign-up-container">
                    <form
                        className="login-form"
                        action="#"
                        onSubmit={handleSubmitRegister}
                    >
                        <h1 className="login-h1">Konto erstellen</h1>
                        <div className="login-social-container">
                            <GoogleLogin
                                clientId="145493827917-3leap8j9tp9aofr6p8vapu6cnvee9ucn.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button
                                        style={{
                                            borderRadius: 20,
                                            textTransform: "none",
                                            backgroundColor: "#de5246",
                                            color: "white",
                                            padding: "5px 5px",
                                            fontSize: "14px",
                                            margin: "4px",
                                            width: "80%",
                                        }}
                                        className="login-googleButton"
                                        fullWidth
                                        variant="contained"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<GoogleIcon />}
                                    >
                                        Google Sign In
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                            <GoogleLogin
                                clientId="145493827917-3leap8j9tp9aofr6p8vapu6cnvee9ucn.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button
                                        style={{
                                            borderRadius: 20,
                                            textTransform: "none",
                                            backgroundColor: "#3b5998",
                                            padding: "5px 5px",
                                            fontSize: "14px",
                                            margin: "4px",
                                            width: "80%",
                                            position: "left",
                                        }}
                                        className="login-facebookButton"
                                        variant="contained"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<FacebookIcon />}
                                    >
                                        Facebook Sign in
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                        </div>
                        <span className="login-span">oder benutze deine Mail</span>
                        <div className="login-form-name">
                            <input
                                name="firstName"
                                className="login-input"
                                type="text"
                                placeholder="Vorname"
                                onChange={onChange}
                                required
                            />
                            <input
                                name="lastName"
                                className="login-input"
                                type="text"
                                placeholder="Nachname"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <input
                            name="email"
                            className="login-input"
                            type="email"
                            placeholder="Mail"
                            onChange={onChange}
                            required
                        />
                        <input
                            name="password"
                            className={`login-input ${wrongPasswordRegister ? " invalid" : ""
                                }`}
                            type={showPasswordRegister ? "text" : "password"}
                            placeholder="Passwort"
                            onChange={onChange}
                            required
                        />
                        <input
                            name="confirmPassword"
                            className={`login-input ${wrongPasswordRegister ? " invalid" : ""}`}
                            type={showPasswordRegister ? "text" : "password"}
                            placeholder="Wiederhole Password"
                            onChange={onChange}
                            required
                        />
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
                        {successMessageLogin && (
                            <span className="login-span-passwort-wrong">
                                {" "}
                                {successMessageLogin}{" "}
                            </span>
                        )}

                        <button className="login-button" type="submit">
                            Registrieren
                        </button>
                    </form>
                </div>
                <div className="login-form-container login-sign-in-container">
                    <form className="login-form" action="#" onSubmit={handleSubmitLogin}>
                        <h1 className="login-h1">Einloggen</h1>
                        <div className="login-social-container">
                            <GoogleLogin
                                clientId="145493827917-3leap8j9tp9aofr6p8vapu6cnvee9ucn.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button
                                        style={{
                                            borderRadius: 20,
                                            textTransform: "none",
                                            backgroundColor: "#de5246",
                                            color: "white",
                                            padding: "5px 5px",
                                            fontSize: "14px",
                                            margin: "4px",
                                            width: "80%",
                                        }}
                                        className="login-googleButton"
                                        fullWidth
                                        variant="contained"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<GoogleIcon />}
                                    >
                                        Google log in
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                            <GoogleLogin
                                clientId="145493827917-3leap8j9tp9aofr6p8vapu6cnvee9ucn.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button
                                        style={{
                                            borderRadius: 20,
                                            textTransform: "none",
                                            backgroundColor: "#3b5998",
                                            padding: "5px 5px",
                                            fontSize: "14px",
                                            margin: "4px",
                                            width: "80%",
                                            position: "left",
                                        }}
                                        className="login-facebookButton"
                                        variant="contained"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<FacebookIcon />}
                                    >
                                        Facebook log in
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                        </div>
                        <span className="login-span">oder nutze deinen Mail-Account</span>
                        <input name="email" className="login-input" type="email" placeholder="Mail" onChange={onChange} required />
                        <input
                            required
                            className="login-input"
                            name="password"
                            type="password"
                            placeholder="Passwort"
                            onChange={onChange}
                        />

                        {errorMessageLogin && (
                            <span className="login-span-passwort-wrong">
                                {" "}
                                {errorMessageLogin}
                                {" "}
                            </span>
                        )}


                        <button className="login-button">Einloggen</button>
                        <Link to="/forgetEmail" className="login-a">
                            Passwort vergessen?
                        </Link>
                    </form>
                </div>
                <div className="login-overlay-container">
                    <div className="login-overlay">
                        <div className="login-overlay-panel login-overlay-left">
                            <h1 className="login-h1">Willkommen zurück!</h1>
                            <p className="login-p">
                                Hast du bereits ein Konto? Klick auf den Button, um dich
                                einzuloggen!
                            </p>
                            <button
                                className="login-button-ghost"
                                id="signIn"
                                onClick={signInButton}
                            >
                                Einloggen
                            </button>
                        </div>
                        <div className="login-overlay-panel login-overlay-right">
                            <h1 className="login-h1">Hallo!</h1>
                            <p className="login-p">
                                Du hast noch keinen Account? Registriere dich kostenlos!
                            </p>
                            <button
                                className="login-button-ghost"
                                id="signUp"
                                onClick={signUpButton}
                            >
                                Registrieren
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
