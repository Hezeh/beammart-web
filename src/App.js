import ioslogo from './ios_logo.svg';
import playBadge from './google-play-badge.png';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  brand: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 30
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(1000),
      height: theme.spacing(40),
    }
  },
  button: {
    margin: theme.spacing(1),
    paddingTop: 50,
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex'
  },
  titleContainer: {
    margin: theme.spacing(1)
  },
  mobileStoreButton: {
    marginRight: 100
  },
  iosImage: {
    paddingBottom: 9,
    marginRight: 10,
    paddingTop: 2,
    height: 42,
  },
  paper: {
    background: 'linear-gradient(45deg, #ec008c 10%, #E94057 60%, #fc6767 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  merchantPaper: {
    background: 'linear-gradient(45deg, #ff00cc 10%, #333399 60%, #fc6767 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  all: {
    background: '#000000',
    flexGrow: 1,
  }
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.brand}>
            Beammart
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

function App() {
  const classes = useStyles();
  return (
    <Grid className={classes.all}>
      <ButtonAppBar />
      <div className={classes.root}>
        <Paper elevation={3} className={ classes.paper} >
          <div>
            <Typography variant="h4" className={classes.title}>
              Beammart for Consumers
          </Typography>
            <Typography variant="h6" className={classes.title}>
              Search and Discover products sold nearby.
          </Typography>
            <div className={classes.button}>
              {/* <a
                href="https://apple.com"
                target="_blank"
              ><img src={ioslogo} height={50} className={classes.iosImage} /> </a> */}
              <a
                href="https://play.google.com/store/apps/details?id=com.beammart.beammart"
                target="_blank"
              ><img src={playBadge} height={60} /> </a>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} className={classes.merchantPaper} >
          <div>
            <Container className={classes.titleContainer}>
              <Typography variant="h4" className={classes.title}>
                Beammart for Merchants
              </Typography>
            </Container>
            <Typography variant="h6" className={classes.title}>
              Add your product offerings and let your customers discover them for free!
          </Typography>
            <div className={classes.button}>
              {/* <a
                href="https://apple.com"
                target="_blank"
              ><img src={ioslogo} height={50} className={classes.iosImage} /> </a> */}
              <a
                href="https://play.google.com/store/apps/details?id=com.beammart.merchants"
                target="_blank"
              ><img src={playBadge} height={60} /> </a>
            </div>
          </div>
        </Paper>
      </div>
    </Grid>
  );
}


export default App;
