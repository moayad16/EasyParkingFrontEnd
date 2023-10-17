import React, { useState, useEffect } from "react";
import "../css/light.css";
import Card from "../../components/js/card";
import axios from "axios";

export default function Light() {
  const [data, setData] = useState([{
    Temperature: 0,
    heatIndex: 0,
    humidity: 0,
    brightness: 0,
  }]);

  // peridoically fetch data from the server
  let count = 0
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "https://smartcitybackend.onrender.com/lighting-system/getLightingInfo"
        )
        .then((res) => {
          setData(res.data);
          setTimeout(fetchData, 1000);
        })
        .catch((err) => {
          console.log(err);
          count++;
          setTimeout(fetchData, 1000);
        });
    }

    fetchData();
  }, []);

  return (
    <div className="lightCont">
      <h1 className="pageTitle">Light Control</h1>
      <div className="row">
        <div className="col-lg-3">
          <Card title={"Temperature"} value={data[0].Temperature} unit={"°C"} />
        </div>
        <div className="col-lg-3">
          <Card title={"Heat Index"} value={data[0].heatIndex} unit={"°C"} />
        </div>
        <div className="col-lg-3">
          <Card title={"Humidity"} value={data[0].Humidity} unit={"g/m3"} />
        </div>
        <div className="col-lg-3">
          <Card title={"Brightness"} value={data[0].brightness} unit={"%"} />
        </div>
      </div>
    </div>
  );
}
