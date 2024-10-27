import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Gurus from "./Gurus";
import Aktien from "./Aktien";
import MarketData from "./MarketData";






function Home() {
  console.log("Hi, welcome to Nifty!")

  const [searchParams] = useSearchParams();
  const isfromConfirmedEmail = searchParams.get("isfromConfirmedEmail");
  const isEmailconfirmed = searchParams.get("isEmailconfirmed");
  const BASEURL = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    if (isfromConfirmedEmail) {
      user.isEmailconfirmed = isEmailconfirmed === "true";

      dispatch({ type: "AUTH", data: user });
    }
  }, []);


  

  return (
    <div>
{/* <HelloMobile/> */}


<MarketData/>



      <Header />

      {/* <Aktienbars/> */}


      {/* <Analysen /> */}

      {/* <FondsUndETFs />*/}

      <Aktien />

      <Gurus /> 
    </div>
  );
}

export default Home;
