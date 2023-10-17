import React from "react";
import '../css/street.css';


export default function Street({top, bottom, left, right, width, height, rotate}) {
    return  (
        <div style={{top:top, transform:rotate, left:left, width:width, right:right}} className="street">
            <div className="streetDashesContainer">
                <div className="streetDashes">
                </div>
                <div className="streetDashes">
                </div>
                <div className="streetDashes">
                </div>
            </div>
        </div>
    )
}