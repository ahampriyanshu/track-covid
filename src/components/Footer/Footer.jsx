import { Link, Grid } from '@material-ui/core/';
import React from 'react';
import * as Icon from 'react-feather';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
        align="center"
      >
        <Grid item xs={2} md={1}>
          <Link color="inherit"
            underline="none"
            href="https://ahampriyanshu.github.io"
          >
            {' '}
            <Icon.Link2 />{' '}
          </Link>
        </Grid>
        <Grid item xs={2} md={1}>
          <Link color="inherit"
            underline="none"
            href=" https://t.me/ahampriyanshu"
          >
            {' '}
            <Icon.Send />{' '}
          </Link>
        </Grid>
        <Grid item xs={2} md={1}>
          <Link color="inherit"
            underline="none"
            href="mailto:ahampriyanshu@gmail.com"
          >
            {' '}
            <Icon.Mail />{' '}
          </Link>
        </Grid>
        <Grid item xs={2} md={1}>
          <Link color="inherit"
            underline="none"
            href="https://github.com/ahampriyanshu"
          >
            {' '}
            <Icon.GitHub />{' '}
          </Link>
        </Grid>
        <Grid item xs={2} md={1}>
          <Link color="inherit"
            underline="none"
            href="https://www.linkedin.com/in/ahampriyanshu"
          >
            {' '}
            <Icon.Linkedin />{' '}
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default React.memo(Footer);
