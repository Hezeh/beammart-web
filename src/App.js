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

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(1000),
      height: theme.spacing(40),
    },
  },
  button: {
    margin: theme.spacing(1),
    paddingTop: 50,
    flexGrow: 1,
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
  }
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Beammart
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}

function App() {
  const classes = useStyles();
  return (
    <>
      <ButtonAppBar />
      <div className={classes.root}>
        <Paper elevation={3} >
          <div>
            <Typography variant="h4" className={classes.title}>
              Beammart for Consumers
          </Typography>
            <Typography variant="h6" className={classes.title}>
              Search and Discover products sold near you.
          </Typography>
            <div className={classes.button}>
              <a
                href="https://apple.com"
                target="_blank"
              ><img src={ioslogo} height={50} className={classes.iosImage} /> </a>
              <a
                href="https://play.google.com"
                target="_blank"
              ><img src={playBadge} height={60} /> </a>
            </div>
          </div>
        </Paper>
        <Paper elevation={3} >
          <div>
            <Container className={classes.titleContainer}>
              <Typography variant="h4" className={classes.title}>
                Beammart for Merchants
              </Typography>
            </Container>
            <Typography variant="h6" className={classes.title}>
              Add your product offerings and help your customers discover them for free!
          </Typography>
            <div className={classes.button}>
              <a
                href="https://apple.com"
                target="_blank"
              ><img src={ioslogo} height={50} className={classes.iosImage} /> </a>
              <a
                href="https://play.google.com"
                target="_blank"
              ><img src={playBadge} height={60} /> </a>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
}


export default App;
