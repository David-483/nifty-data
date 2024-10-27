import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DCFCalculator.css";

function DCFCalculator({ ticker }) {
  const baseURL = process.env.REACT_APP_BACKEND_URL;

  const [dataCFS, setDataCFS] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `${baseURL}/aktienpagefinancials/${ticker}`;
    fetchData(url);
  }, [baseURL, ticker]);

  const fetchData = async (myURL) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(myURL);
      const data = result.data.myDataCFSYear;
      console.log(data)
      setDataCFS(data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };



  return (
    <div className="dcf-calculator">

    </div>
  );
}

export default DCFCalculator;