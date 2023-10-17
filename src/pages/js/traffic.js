import React from "react";
import '../css/traffic.css';
import Street from "../../components/js/street";


export default function Traffic() {
    return (
      <div className="maincont">
        <div className="container">
          <Street top={"30%"} left={0} />
          <Street
            top={"-176px"}
            rotate={"rotate(90deg)"}
            left={"450px"}
            width={"700px"}
          />
          <Street top={"30%"} width={"540px"} />
        </div>
      </div>
    );
}