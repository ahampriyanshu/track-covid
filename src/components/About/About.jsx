import React from 'react';
import Card from '@material-ui/core/Card';
import * as Icon from 'react-feather';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: [
      '"Courier"',

    ].join(','),
  },
  '@global': {
    fontFamily: `"Courier"`,
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  CardContent:{
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
}));

const tiers = [
  {
    title: <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay " ><Icon.Meh/></Link>,
    subheader: 'About Me',
    description: [<Link color="inherit" underline="none" href=" " > <Icon.GitHub />  Priyanshumay</Link>, <Link color="inherit" underline="none" href=" " > <Icon.Linkedin />  Priyanshu Tiwari</Link>,<Link color="inherit" underline="none" href=" " > <Icon.Activity /> Some Projects</Link>, <Link color="inherit" underline="none" href=" " > <Icon.AtSign/> tiwarimay2002@gmail.com </Link>],
  },
  {
    title: <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay " ><Icon.GitHub /></Link>,
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
      <Link color="inherit" underline="none" href="git@github.com:PriyanshuMay/track-covid.git" >Download Source Code</Link>,
      <Link color="inherit" underline="none" href="https://api.covid19india.org/" >Source for Indian data</Link>,
      <Link color="inherit" underline="none" href="https://covid19.mathdro.id/api" >Source for global data</Link>,
      <Link color="inherit" underline="none" href="https://raw.githubusercontent.com/covid19india/api/gh-pages/raw_data.json" >Download data as JSON</Link>,
      <Link color="inherit" underline="none" href="https://raw.githubusercontent.com/covid19india/api/gh-pages/csv/latest/raw_data.csv" >Download data as CSV</Link>,
    ],
  },
];

function Main() {

  const classes = useStyles();

  return (
    <React.Fragment className="about-main" >
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
           CRA - PWA
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
       A react app to track covid 19
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
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
      </Container>
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