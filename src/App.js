import React, { useState, useEffect } from "react";
import './App.css';
import Card from './components/Card';

import Axios from "axios";

function App() {

  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">

      <div className="MyCard">
        <Card details={details} />
        <Card details={details} />
        <Card details={details} />
      </div>

      <div className="MyCard">
        <Card details={details} />
        <Card details={details} />
        <Card details={details} />
      </div>

      <div className="MyCard">
        <Card details={details} />
        <Card details={details} />
        <Card details={details} />
      </div>
      

    </div>
  );
}

export default App;
