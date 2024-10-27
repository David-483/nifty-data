import { Link } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';


// import "./styles.css";

function Home (){
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

    return (
<div className="content-wrapper">
  <div className="content-wrapper-header">
   <div className="content-wrapper-context">
    <h3 className="img-content">
     
     Adobe Stock
    </h3>
    <div className="content-text">Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, that will help you with your new project.</div>
    <button className="content-button">Start free trial</button>
   </div>
   <img className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""></img>
  </div>
  <div className="content-section">
   <div className="content-section-title">Installed</div>
   <ul>
    <li className="adobe-product">
     <div className="products">
     
      Photoshop
     </div>
     <span className="status">
      <span className="status-circle green"></span>
      Updated</span>
     <div className="button-wrapper">
      <button className="content-button status-button open">Open</button>
      <div className="menu">
       <button className="dropdown">
        <ul>
         <li><a href="#">Go to Discover</a></li>
         <li><a href="#">Learn more</a></li>
         <li><a href="#">Uninstall</a></li>
        </ul>
       </button>
      </div>
     </div>
    </li>
    <li className="adobe-product">
     <div className="products">
      
      Illustrator
     </div>

     <span className="status">
      <span className="status-circle"></span>
      Update Available</span>
     <div className="button-wrapper">
      <button className="content-button status-button">Update this app</button>
      <div className="pop-up">
       <div className="pop-up__title">Update This App
        
       </div>
       <div className="pop-up__subtitle">Adjust your selections htmlFor advanced options as desired behtmlFore continuing. <a href="#">Learn more</a></div>
       <div className="checkbox-wrapper">
        <input type="checkbox" id="check1" className="checkbox"></input>
        <label htmlFor="check1">Import previous settings and preferences</label>
       </div>
       <div className="checkbox-wrapper">
        <input type="checkbox" id="check2" className="checkbox"></input>
        <label htmlFor="check2">Remove old versions</label>
       </div>
       <div className="content-button-wrapper">
        <button className="content-button status-button open close">Cancel</button>
        <button className="content-button status-button">Continue</button>
       </div>
      </div>
      <div className="menu">
       <button className="dropdown">
        <ul>
         <li><a href="#">Go to Discover</a></li>
         <li><a href="#">Learn more</a></li>
         <li><a href="#">Uninstall</a></li>
        </ul>
       </button>
      </div>
     </div>
    </li>
    <li className="adobe-product">
     <div className="products">
      
      After Effects
     </div>
     <span className="status">
      <span className="status-circle green"></span>
      Updated</span>
     <div className="button-wrapper">
      <button className="content-button status-button open">Open</button>
      <div className="menu">
       <button className="dropdown">
        <ul>
         <li><a href="#">Go to Discover</a></li>
         <li><a href="#">Learn more</a></li>
         <li><a href="#">Uninstall</a></li>
        </ul>
       </button>
      </div>
     </div>
    </li>
   </ul>
  </div>
  <div className="content-section">
   <div className="content-section-title">Apps in your plan</div>
   <div className="apps-card">
    <div className="app-card">
     <span>
      
      Premiere Pro
     </span>
     <div className="app-card__subtext">Edit, master and create fully proffesional videos</div>
     <div className="app-card-buttons">
      <button className="content-button status-button">Update</button>
      <div className="menu"></div>
     </div>
    </div>
    <div className="app-card">
     <span>
      
      InDesign
     </span>
     <div className="app-card__subtext">Design and publish great projects & mockups</div>
     <div className="app-card-buttons">
      <button className="content-button status-button">Update</button>
      <div className="menu"></div>
     </div>
    </div>
    <div className="app-card">
     <span>
      
      After Effects
     </span>
     <div className="app-card__subtext">Industry Standart motion graphics & visual effects</div>
     <div className="app-card-buttons">
      <button className="content-button status-button">Update</button>
      <div className="menu"></div>
     </div>
    </div>
   </div>
  </div>
  </div>

  );
}

export default Home;
