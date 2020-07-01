import React from "react";
import "./Rotating.css";
import virus from "../../images/rotating.png";

const Rotating = () => {
  return (
      <img src={virus} alt="Loading..." className="rotating"/>
  )
}

export default React.memo(Rotating);