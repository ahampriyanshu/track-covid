import React from 'react';
import './Rotating.css';
import virusImage from '../../images/rotating.png';

const Rotating = () => {
  return (
    <div className="Rotating">
      <img width='128' height='128' src={virusImage} alt="Loading..." className="rotating"/>
    </div>
  )
}

export default Rotating;