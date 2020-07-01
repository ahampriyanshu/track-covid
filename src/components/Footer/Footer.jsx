import React from 'react';
import { Link,Grid } from '@material-ui/core/';
import * as Icon from 'react-feather';
import './Footer.css';

const Footer = () => {

    return (
<footer className="footer-container">
    <br />
    <Grid container
  spacing={12}
  direction="coloumn"
  alignItems="center"
  justify="center"
  align="center"
  >
  <Grid item xs={2}  md={2} >
  <Link color="inherit" underline="none" href="https://gdy.club/priyanshu" > <Icon.Link2 /> </Link>
  </Grid>
  <Grid item xs={2} md={2} >
  <Link color="inherit" underline="none" href="mailto:tiwarimay2002@gmail.com" > <Icon.Mail /> </Link>
  </Grid>
  <Grid item xs={2} md={2} >
  <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay" > <Icon.GitHub /> </Link>
  </Grid>
  <Grid item xs={2} md={2} >
  <Link color="inherit" underline="none" href="https://www.linkedin.com/in/priyanshu-tiwari-b85a7a194" > <Icon.Linkedin /> </Link>
  </Grid>
  <Grid item xs={2} md={2} >
  <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay/track-covid" > <Icon.Download /> </Link>
  </Grid>
</Grid>
      </footer>
    );
}

export default React.memo(Footer);