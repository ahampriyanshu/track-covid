import React from "react";
import "./Rotating.css";
import virus from "../../images/rotating.png";

const Rotating = () => {
  return (
    <div>
      <img src={virus} alt="Loading..." className="rotating"/>
    </div>
  )
}

export default Rotating;