import './login.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/auth";
import { useNavigate } from "react-router-dom";


const initialStateLogin = {
    email: "",
    password: "",
};

function LoginPage() {
    const [form, setForm] = useState(initialStateLogin);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();


    var errorMessageLogin = useSelector((state) => state.auth.errorMessageLogin);


    const dispatch = useDispatch();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(signin(form, navigate));
    };

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        
        setMessage(errorMessageLogin);
      });


    return (
        <div className='loginBody'>
            <div className='loginContainer'>
            <p className='boxTextHead'>Anmelden</p>
                <div className='loginBox'>
                    <form action="#" onSubmit={handleSubmitLogin}>
                    <input name="email" className='logginInput' placeholder="E-Mail-Adresse" onChange={onChange} required></input>
                    <input name="password" type="password" placeholder="Dein Passwort" onChange={onChange} required></input>
                    {errorMessageLogin && (
                            <span style={{textAlign: "center", marginTop:"10px"}} className="login-span-passwort-wrong">
                                {" "}
                                {errorMessageLogin}
                                {" "}
                            </span>
                    )}

                    <button className='NiftyButton' type="submit">Anmelden</button>
                    </form>

                    <Link style={{textAlign:"center", fontSize:"11px", marginTop:"5px"}} to="/forgetEmail">Passwort vergessen</Link>
                    <div className='Line'></div>

<p style={{textAlign:"center", fontWeight:"900", color: "white", marginTop:"40px", marginBottom:"-15px"}}> Noch kein Mitglied?</p>
<Link style={{textAlign:"center"}}  to="/newMember"> <p className="registerText" > Jetzt kostenfreies Konto erstellen</p></Link>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;
