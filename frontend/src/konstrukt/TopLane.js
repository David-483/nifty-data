import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Menu, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux';
import "./TopLane.css"

import Autocomplete from "./AutoComplete";

import LoggedIn from "./LoggedIn";



function TopLane() {



    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
        setUser(null);
        setAnchorEl(null);
    }


      // Button PopUp
  const [openDialogLogin, setOpenDialogLogin] = React.useState(false);

  const handleClickOpenLogin = () => {
  <Link to="/loginPage"></Link>
  };

  const handleCloseLogin = (event, reason) => {
      if (reason !== 'backdropClick') {
    setOpenDialogLogin();
}
}



    useEffect(() => {
        const token = user?.token;

        //JWT...

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
<>
{/* <div>
<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogLogin}
        // onClick={handleCloseLogin}
      >
    <Button  onClick={handleCloseLogin}> X </Button>
<Login/>

      </Backdrop>
</div> */}


        
        <div id="header" className="header">
            <div className="header-menu">
                <Link to="/">
                    {" "}
                    <img
                        src="/img/unternehmenslogos/Nifty_Logo_Glass.svg"
                        height="24"
                    ></img>{" "}
                </Link>
                <Link to="/aktienfinder">
                    Aktien
                </Link>
                <Link to="/gurus/overview">
                    Gurus
                </Link>
                <Link to="/portfolioTracker">
                    Portfolio Tracker
                </Link>
            </div>
            <Autocomplete />
            <div className="header-profile">

                {user && user.result?.isEmailconfirmed ? (

                    <div className="logged-in-area">
                        {/* <div>
                            <Button className='NiftyButton' 
                                id="basic-button-SignIn"
                                onClick={handleClick}
                                style={{
                                    borderRadius: 35,
                                    backgroundColor: "rgba(255,255,255,0)",
                                    boxShadow: "none",
                                    backgroundSize: "300%, 100%",
                                    padding: "6px 20px",
                                    fontSize: "15px",
                                    width: "100%",
                                    height: 40,
                                    textTransform: "capitalize",
                                    
                                }}
                                variant="contained"
                            >
                           {user.result.firstName}  {user.result.lastName} 

                            </Button>
                        

                        </div> */}
                        <LoggedIn/>
                    </div>
                ) : (
<Link to="/loginPage">
                    <Button 
                    className="start-page-content-wrapper-custom-header-button"
                        id="basic-button-SignIn"
                        style={{
                            borderRadius: 35,
                            backgroundColor: "rgba(0,0,0,0.4)",
                            backgroundSize: "800%, 100%",
                            padding: "6px 20px",
                            fontSize: "15px",
                            display: 'flex',
                            width: 140,
                            height: 40,
                            textTransform:"none"
                        }}
                        variant="contained"
                    
                    >
                        Anmelden
                    </Button>
                    </Link>
                )}

            </div>
        </div>
        </>
    );
}

export default TopLane;
