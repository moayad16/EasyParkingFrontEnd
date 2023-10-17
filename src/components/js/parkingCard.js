import React from "react";
import "../css/parkingCard.css";

export default function Card({ name, lat, long, totalSlots, freeSlots }) {
  return (
    <div className="card">
      <div className="card-header">
        {/* <iframe
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBvpeXiCF6iQbburn01Fw1ilweNykU_Ngc&center=${lat},${long}&zoom=15`}
          allowfullscreen
        ></iframe> */}
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
      <div className="card-footer">
        <div className="row">
          <div className="max col-6">Total Slots: {totalSlots}</div>
          <div className="col-6">Free Slots {freeSlots}</div>
        </div>
      </div>
    </div>
  );
}
