import React from 'react';
import Card from '@material-ui/core/Card';
import * as Icon from 'react-feather';
import { CardContent, Paper, CardHeader,Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import virus from "../../images/rotating.png";
import react from '../../images/react.png';
import mui from '../../images/mui.png';
import net from '../../images/netlify.png'
import './About.css';

const useStyles = makeStyles((theme) => ({
  '@global': {
    fontFamily: `"Courier"`,
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:'none',
  },
  CardContent:{
    backgroundColor: 'none' ,
  },
}));

const tiers = [
  {
    title: <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay " ><Icon.Coffee/></Link>,
    subheader: 'About Me',
    description: [<Link color="inherit" underline="none" href=" " > <Icon.GitHub />  Priyanshumay</Link>, <Link color="inherit" underline="none" href=" " > <Icon.Linkedin />  Priyanshu Tiwari</Link>,<Link color="inherit" underline="none" href=" " > <Icon.Activity /> Some Projects</Link>, <Link color="inherit" underline="none" href=" " > <Icon.AtSign/> tiwarimay2002@gmail.com </Link>],
  },
  {
    title: <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay " > <img src={virus} alt="logo" className="project-logo"/></Link>,
    subheader: 'About The Project',
    description: [
      <Link  color="inherit" underline="none" href=" " > React</Link>,
      <Link color="inherit" underline="none" href=" " > Material Ui</Link>,
      <Link color="inherit" underline="none" href=" " > Axios</Link>,
      <Link color="inherit" underline="none" href=" " > Chart-js-2</Link>,
      <Link color="inherit" underline="none" href=" " > Feather Icons</Link>,
      <Link color="inherit" underline="none" href=" " > Netlify</Link>
    ],
  },
  {
    title:<Link color="inherit" underline="none" href=" " >  <Icon.Database /></Link>,
    subheader: 'Datasource',
    description: [
      <Link color="inherit" underline="none" href="git@github.com:PriyanshuMay/track-covid.git" ><Icon.Download /> Download Source Code</Link>,
      <Link color="inherit" underline="none" href="https://api.covid19india.org/" ><Icon.Link2 /> Source for Indian data</Link>,
      <Link color="inherit" underline="none" href="https://covid19.mathdro.id/api" ><Icon.Link2 /> Source for global data</Link>,
      <Link color="inherit" underline="none" href="https://raw.githubusercontent.com/covid19india/api/gh-pages/raw_data.json" ><Icon.Download /> Download data as JSON</Link>,
      <Link color="inherit" underline="none" href="https://raw.githubusercontent.com/covid19india/api/gh-pages/csv/latest/raw_data.csv" ><Icon.Download /> Download data as CSV</Link>,
    ],
  },
];

function Main() {

  const classes = useStyles();

  return (
    <React.Fragment className="about-main" >

<br />

<Grid justifyContent="center" align="center" container spacing={12}>
  <Grid item md={2}>
  <span className='hero-span react-span' ><img src={react} alt="logo" className="project-logo"/><br />Created in React</span>
  </Grid>
  <Grid item md={2}>
  <span className='hero-span mui-span' ><img src={mui} alt="logo" className="project-logo"/><br />Styled in MUI</span>
  </Grid>
  <Grid item md={2}>
  <span className='hero-span net-span' ><img src={net} alt="logo" className="project-logo"/><br />Hosted On Netlify</span>
  </Grid>
</Grid>

 
 


      <Paper maxWidth="md" elevation={0}  component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent
                className={classes.CardContent}
                >
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

const About = ({ value, index }) => {
  if (value !== index) return null;

  return (
Main()

  );
}

export default About;