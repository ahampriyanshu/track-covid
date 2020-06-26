import React from 'react';

import './Header.css';
import headerImg from '../../images/image.png';

const Header = () => {
    return (
        <div className="headerCont">
            <img src={headerImg} className="image" alt="COVID-19 Tracker"/>
        </div>
    );
}

export default Header;