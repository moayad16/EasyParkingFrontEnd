import React from "react";
import "../css/card.css";

export default function Card({title, value, unit}) {
  return (
    <div className="crd">
      <div className="body">
        <h1>{value} {" "} {unit}</h1>
      </div>
      <div className="footer">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}
