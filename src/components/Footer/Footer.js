import React from 'react';
import Link from '@material-ui/core/Link';
import * as Icon from 'react-feather';
import './Footer.css';

const Footer = () => {

    return (
<footer className="footer-container">
<Link href="https://github.com/PriyanshuMay " > <Icon.GitHub /> </Link>
<Link href="https://github.com/PriyanshuMay " > <Icon.Mail /> </Link>
<Link href="https://github.com/PriyanshuMay " > <Icon.Linkedin /> </Link>
<Link href="https://github.com/PriyanshuMay " > <Icon.Download /> </Link>
      </footer>
    );
}

export default Footer;