import React from "react";
import "../css/parkingMonitor.css";
import { useEffect, useState } from "react";
import Card from "../../components/js/parkingCard";
import axios from "axios";

export default function ParkingMonitor() {
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/parking/getAllParkingSpots")
      .then((res) => {
        console.log(res.data);
        // sort the parking spots by distance to the current location
        const sortedParkingSpots = res.data.sort((a, b) => {
          const aDistance = Math.sqrt(
            Math.pow(a.lat - coordinates.lat, 2) +
              Math.pow(a.long - coordinates.long, 2)
          );
          const bDistance = Math.sqrt(
            Math.pow(b.lat - coordinates.lat, 2) +
              Math.pow(b.long - coordinates.long, 2)
          );
          return aDistance - bDistance;
        });
        setParkingSpots(sortedParkingSpots);
      });
  }, [coordinates]);



  return (
    <div className="parkingMonitor">
      <h1>Parks Near You</h1>
      <div className="row parkingCont">
        {parkingSpots.map((parkingSpot) => {
          return (
            <div key={parkingSpot.id} className="col-lg-3">
              <Card
                name={parkingSpot.name}
                lat={parkingSpot.lat}
                long={parkingSpot.long}
                totalSlots={parkingSpot.maxCap}
                freeSlots={parkingSpot.currentCap}
               />
            </div>
          );
        })}
      </div>
    </div>
  );
}
