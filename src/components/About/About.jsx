import mui from '../../images/mui.png';
import net from '../../images/netlify.png';
import react from '../../images/react.png';
import {
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import './About.css';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    boxShadow: 'none',
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  cardHeader: {
    backgroundColor: 'none',
    fontSize: 16,
  },
  CardContent: {
    backgroundColor: 'none',
  },
}));

const tiers = [
  {
    description: [
      <Link
        color="inherit"
        underline="none"
        href="git@github.com:ahampriyanshu/track-covid.git"
      >
        <span className="card-span">Source Code </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://api.covid19india.org/"
      >
        <span className="card-span">Local data </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://covid19.mathdro.id/api"
      >
        <span className="card-span">Global data </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://raw.githubusercontent.com/covid19india/api/gh-pages/raw_data.json"
      >
        <span className="card-span">JSON </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://raw.githubusercontent.com/covid19india/api/gh-pages/csv/latest/raw_data.csv"
      >
        <span className="card-span">CSV </span>
      </Link>,
    ],
  },
];

function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box m={4}>
        <Grid
          container
          spacing={6}
          direction="row"
          alignItems="center"
          justifyContent="center"
          align="center"
        >
          <Grid item xs={12} spacing={3} md={3}>
            <span className="main-span react-span">
              <img src={react} alt="logo" className="react-logo" />
              <br />
              Built in React
            </span>
          </Grid>
          <Grid item xs={12} spacing={3} md={3}>
            <span className="main-span mui-span">
              <img src={mui} alt="logo" className="project-logo" />
              <br />
              Styled in MUI
            </span>
          </Grid>
          <Grid item xs={12} spacing={3} md={3}>
            <span className="main-span net-span">
              <img src={net} alt="logo" className="project-logo" />
              <br />
              Hosted On Netlify
            </span>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        align="center"
      >
        {tiers.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={6} md={3}>
            <Card classes={{root: classes.card}}>
              <CardHeader
                titleTypographyProps={{align: 'center'}}
                subheaderTypographyProps={{align: 'center'}}
                className={classes.cardHeader}
              />
              <CardContent className={classes.CardContent}>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
    </React.Fragment>
  );
}

const About = ({value, index}) => {
  if (value !== index) return null;

  return Main();
};

export default React.memo(About);
