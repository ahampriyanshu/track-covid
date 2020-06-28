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
  '@global': {
    ul: {
      fontFamily:'Courier New',
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
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay " ><Icon.Meh/></Link>,
    subheader: 'About Me',
    description: [<Link color="inherit" underline="none" href=" " ><Icon.GitHub />  Priyanshumay</Link>, <Link color="inherit" underline="none" href=" " ><Icon.Linkedin />  Priyanshu Tiwari</Link>,<Link color="inherit" underline="none" href=" " ><Icon.Activity /> Some Projects</Link>, <Link color="inherit" underline="none" href=" " ><Icon.AtSign/> Gmail </Link>],
  },
  {
    title: <Link color="inherit" underline="none" href="https://github.com/PriyanshuMay " ><Icon.GitHub /></Link>,
    subheader: 'About The Project',
    description: [
      <Link  color="inherit" underline="none" href=" " >React</Link>,
      <Link color="inherit" underline="none" href=" " >Material Ui</Link>,
      <Link color="inherit" underline="none" href=" " >Axios</Link>,
      <Link color="inherit" underline="none" href=" " >Chart-js-2</Link>,
      <Link color="inherit" underline="none" href=" " >Feather Icons</Link>
    ],
  },
  {
    title:<Link color="inherit" underline="none" href=" " > <Icon.Database /></Link>,
    subheader: 'Database',
    description: [
      <Link color="inherit" underline="none" href=" " >Download Source Code</Link>,
      <Link color="inherit" underline="none" href=" " >Source for Indian data</Link>,
      <Link color="inherit" underline="none" href=" " >Source for global data</Link>,
      <Link color="inherit" underline="none" href=" " >Download data as json</Link>,
    ],
  },
];

function Main() {

  const classes = useStyles();

  return (
    <React.Fragment>
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