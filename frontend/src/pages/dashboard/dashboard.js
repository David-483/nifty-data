import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoggedinInfo from "../../components/LoggedinInfo";
import axios from "axios";
// import "./styles.css";

function Dashboard (){

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    //JWT...
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


 

  return (
    <div>
    {user ? (
      <div className="logged-in-area">
    Eingeloggt

</div>
    ) 
    :
    (
      <div>
        <LoggedinInfo />
        </div>
    )}
</div>
  );
}

export default Dashboard;
