import React, { useState, useEffect } from "react";
import axios from "axios";

import Gurus from './pages/gurus/Gurus';
import GurusLanding from './pages/gurus/Gurulandingpage';
import Home from './pages/start/home';
import Dashboard from './pages/dashboard/dashboard';
import Auth from './pages/Auth/Auth';
import Aktienpage from './pages/Aktien/Aktienpage';
import Aktiencategory from './pages/Aktiencategory/Aktiencategory';
import ETFsFondscategory from './pages/ETFsFondscategory/ETFSFondscategory';
import Analyse from './pages/Analyse/Disney/analyse';
import FondsDashboard from "./pages/ETFsUndFonds/FondsDashboard";
import Rechner from "./pages/Calculator/Rechner";
import BranchenReportsMain from "./pages/branchenReports/BranchenReportsMain";
import Impressum from "./pages/legal/Impressum";
import LoginPage from "./pages/Login/LoginPage";
import NewMember from "./pages/Login/NewMember";
import Aktienlanding from "./pages/start/aktien/Aktienlanding";
import AktienLandingSearch from "./pages/start/aktien/AktienLandingSearch"

import ConfirmEmail from "./pages/Registrations/ConfirmEmail";
import ForgetEmail from "./pages/Registrations/ForgetEmail";
import ResetPassword from "./pages/Registrations/ResetPassword";

import PrivateRoutes from "./components/PrivateRoutes";


import Login from './pages/Login/login';

import MyAccount from "./pages/User/MyAccount";
import BecomePremium from "./pages/User/BecomePremium";

import LeftLane from './konstrukt/LeftLane';
import TopLane from './konstrukt/TopLane';

import Footer from "./pages/Aktien/utils/footer/footer";

import Tracker from "./pages/PortfolioTracker/Tracker"


import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <Router>
    <div className='app'>  
      <TopLane/>
      <div className="wrapper">
      <LeftLane/>

      <div className="contentcontainer">



    <Routes>
    <Route element={<PrivateRoutes/>}>
        <Route exact path='/aktien/:ticker' element={<Aktienpage/>}/>
        <Route exact path='/gurus/:guru' element={<Gurus/>}/>
    </Route>
    <Route exact path='/aktien/AAPL' element={<Aktienpage/>}/>
    <Route exact path='/gurus/0001067983' element={<Gurus/>}/>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/gurus' element={<Dashboard/>}/>
    <Route exact path='/aktien/' element={<Aktienpage/>}/>
    <Route exact path='/analyse' element={<Analyse/>}/>
    <Route exact path='/gurus/overview' element={<GurusLanding/>}/>
    <Route exact path='/aktiencategory/:category' element={<Aktiencategory/>}/>
    <Route exact path='/etfsfondscategory/:category' element={<ETFsFondscategory/>}/>
    <Route exact path='/dashboard' element={<Dashboard/>}/>
    <Route exact path='/customdashboard' element={<Aktienpage/>}/>
    <Route exact path='/login' element ={<Login/>}/>;
    <Route exact path='/User/MyAccount' element ={<MyAccount/>}/>;
    <Route exact path='/User/BecomePremium' element ={<BecomePremium/>}/>;
    <Route exact path='/emailSuccessfull' element = {<ConfirmEmail />}/>;
    <Route exact path='/forgetEmail' element = {<ForgetEmail />}/>;
    <Route exact path='/resetPassword' element = {<ResetPassword />}/>;
    <Route exact path='/Fonds/:ticker' element = {<FondsDashboard />}/>;
    <Route exact path='/reports' element = {<BranchenReportsMain />} />;
    <Route exact path='/Rechner' element = {<Rechner/>}/>;
    <Route exact path='/impressum' element = {<Impressum/>}/>;
    <Route exact path='/loginPage' element = {<LoginPage/>}/>;
    <Route exact path='/newMember' element = {<NewMember/>}/>;
    <Route exact path='/aktienfinder' element = {<Aktienlanding/>}/>;
    <Route exact path='/findStocks/:topic' element = {<AktienLandingSearch/>}/>;
    <Route exact path='/portfolioTracker' element = {<Tracker/>}/>;
  </Routes>
  <Footer/>
  </div>

</div>

     </div>

     </Router>
  );
}

export default App;
