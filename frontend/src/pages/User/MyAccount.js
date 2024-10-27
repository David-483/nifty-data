import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import * as subscriptionTypes from '../../constants/subscriptionTypes';

function MyAccount() {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();

    const handleBecomePremiumClick = (event) => {
        navigate("/user/becomepremium");
    };

    return (
        <div>
            {user && user.result?.subscriptionType == subscriptionTypes.BASIC ? (
                <div className="start-page-container-custom-header">
                    <div className="start-page-content-custom-header">
                        <div className="start-page-content-wrapper-custom-header">
                            <img
                                src="/img/unternehmenslogos/Nifty_Logo_Glass.svg"
                                height="24"
                            ></img>
                            <div className="start-page-content-wrapper-custom-header-text">
                                Werde noch heute Premium Mitglied und erhalte unbegrenzten Zugriff
                                auf über 2000 Aktien, die aktuellsten Daten zu den angesagtesten
                                Gurus und vieles mehr!
                            </div>
                        </div>
                        <Button className="start-page-content-wrapper-custom-header-button"
                            style={{
                                borderRadius: 35,
                                backgroundImage: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
                                backgroundSize: "300%, 100%",
                                padding: "18px 36px",
                                fontSize: "18px",
                                width: 190,
                                height: 65,
                            }}
                            variant="contained"
                            endIcon={<PlayArrowIcon />}
                            onClick={handleBecomePremiumClick}
                        >
                            Go
                        </Button>
                    </div>
                </div>

            ) : (
                <div className="start-page-container-custom-header">
                    <div className="start-page-content-custom-header">
                        <div className="start-page-content-wrapper-custom-header">
                            <div className="start-page-content-wrapper-custom-header-text">
                                Alles richtig gemacht. Du bis {user.result.subscriptionType}!
                            </div>
                        </div>
                    </div>
                </div>
            )}

        <p> Persönliche Einstellungen ändern</p>
        <p> Mitteilungen?</p>
        <p> Support</p>
        <p> Premium kündigen</p>
        <p> Account löschen</p>
        </div>
    );
}

export default MyAccount;
