import React from "react";
import "../css/parkingCard.css";
import "animate.css"

export default function Card({ name, lat, long, totalSlots, freeSlots }) {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <div className="card-header">
        <iframe
          title="park"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6906.386975715013!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1694461160115!5m2!1sen!2seg`}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="card-body">
        <ul className="">
          <li className="">
            <h5 className="card-title">Name: {name}</h5>
          </li>
          <li className="">
            <h5 className="card-title">Adress: {lat}</h5>
          </li>
          <li className="">
            <h5 className="card-title">Latitude: {lat}</h5>
          </li>
          <li className="">
            <h5 className="card-title">Longitude: {long}</h5>
            </li>
          <li className="">
            <h5 className="card-title">Total Slots: {totalSlots}</h5>
          </li>
          <li className="free-slots">
            <h5 className="card-title">Free Slots: {freeSlots}</h5>
          </li>
        </ul>
      </div>
    </div>
  );
}
