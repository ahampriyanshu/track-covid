import React from "react";
import Card from "@material-ui/core/Card";
import * as Icon from "react-feather";
import {
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import virus from "../../images/rotating.png";
import react from "../../images/react.png";
import mui from "../../images/mui.png";
import net from "../../images/netlify.png";
import "./About.css";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    boxShadow: "none",
  },
  "@global": {
    fontFamily: `"Courier"`,
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: "none",
    fontSize: 16,
  },
  CardContent: {
    backgroundColor: "none",
  },
}));

const tiers = [
  {
    title: (
      <Link
        color="inherit"
        underline="none"
        href="https://github.com/PriyanshuMay "
      >
        <Icon.Coffee />
      </Link>
    ),
    subheader: <span className="subheader"> About Me </span>,
    description: [
      <Link color="inherit" underline="none" href=" ">
        {" "}
        <Icon.GitHub />
        <span className="card-span"> Priyanshumay </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://www.linkedin.com/in/priyanshu-tiwari-b85a7a194"
      >
        {" "}
        <Icon.Linkedin />
        <span className="card-span"> Priyanshu Tiwari </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://lab.gdy.club/~priyanshumay/"
      >
        {" "}
        <Icon.Activity />
        <span className="card-span"> Some Projects </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://github.com/PriyanshuMay?tab=repositories"
      >
        {" "}
        <Icon.Code />
        <span className="card-span"> More SourceCode </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="mailto:tiwarimay2002@gmail.com"
      >
        <span className="card-span"> tiwarimay2002@gmail.com </span>{" "}
      </Link>,
    ],
  },
  {
    title: (
      <Link
        color="inherit"
        underline="none"
        href="https://github.com/PriyanshuMay/track-covid"
      >
        {" "}
        <img src={virus} alt="logo" className="project-logo" />
        <span className="card-span"> </span>
      </Link>
    ),
    subheader: <span className="subheader"> Truly OpenSource </span>,
    description: [
      <Link
        color="inherit"
        underline="none"
        href="https://github.com/facebook/react"
      >
        <Icon.GitHub />
        <span className="card-span"> React </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://www.npmjs.com/package/@material-ui/core"
      >
        <Icon.Package />
        <span className="card-span"> Material Ui </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://www.npmjs.com/package/axios"
      >
        <Icon.Package />
        <span className="card-span"> Axios </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://www.npmjs.com/package/react-chartjs-2"
      >
        <Icon.Package />
        <span className="card-span"> Chart-js-2 </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://www.npmjs.com/package/feather-icons"
      >
        <Icon.Package />
        <span className="card-span"> Feather Icons </span>
      </Link>,
    ],
  },
  {
    title: (
      <Link color="inherit" underline="none" href=" ">
        {" "}
        <Icon.Database />
        <span className="card-span"> </span>
      </Link>
    ),
    subheader: <span className="subheader"> DataSources </span>,
    description: [
      <Link
        color="inherit"
        underline="none"
        href="git@github.com:PriyanshuMay/track-covid.git"
      >
        <Icon.Download />
        <span className="card-span"> Download Source Code </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://api.covid19india.org/"
      >
        <Icon.Link2 />
        <span className="card-span"> Source for Indian data </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://covid19.mathdro.id/api"
      >
        <Icon.Link2 />
        <span className="card-span"> Source for global data </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://raw.githubusercontent.com/covid19india/api/gh-pages/raw_data.json"
      >
        <Icon.Download />
        <span className="card-span"> Download data as JSON </span>
      </Link>,
      <Link
        color="inherit"
        underline="none"
        href="https://raw.githubusercontent.com/covid19india/api/gh-pages/csv/latest/raw_data.csv"
      >
        <Icon.Download />
        <span className="card-span"> Download data as CSV </span>
      </Link>,
    ],
  },
];

function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <br />
      <br />
      <Grid
        container
        spacing={6}
        direction="row"
        alignItems="center"
        justify="center"
        align="center"
      >
        <Grid item xs={12} spacing={3} md={3}>
          <span className="main-span react-span">
            <img src={react} alt="logo" className="react-logo" />
            <br />
            Created in React
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
      <br />
      <br />
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        align="center"
      >
        {tiers.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={6} md={2}>
            <Card classes={{ root: classes.card }}>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
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
      <br /><br />
    </React.Fragment>
  );
}

const About = ({ value, index }) => {
  if (value !== index) return null;

  return Main();
};

export default About;
