import ioslogo from './ios_logo.svg';
import playBadge from './google-play-badge.png';
import HomeImage from './ss-2.webp';
import DirectionsImage from './ss-3.webp';
import SearchImage from './ss-5.webp';
import CategoryImage from './ss-7.webp';
import ChatImage from './ss-8.webp';
import WishlistImage from './ss-9.webp';
import ShopImage from './ss-10.webp';
import AnalyticsImage from './ss-11.webp';
import AddImage from './ss-12.webp';
import MerchantChatImage from './ss-13.webp';
import EditImage from './ss-14.webp';
import ProfileImage from './ss-15.webp';
import CategoriesImage from './ss-16.webp';
import ManageImage from './ss-17.webp';
import PurchaseImage from './ss-18.webp';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomCard from './CustomCard';
import Footer from './Footer';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  brand: {
    flexGrow: 1,
    // textAlign: 'center',
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
    // paddingTop: 50,
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex'
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
    color: 'white',
    height: 'auto'
  },
  merchantPaper: {
    background: 'linear-gradient(90deg, #ff00cc 10%, #fc6767 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: "auto",
  },
  all: {
    background: '#000000',
    flexGrow: 1,
  },
  card: {
    background: 'linear-gradient(90deg, #ec008c 10%, #fc6767 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'auto',
  },
  downloadText: {
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  homeImage: {
    height: 1000,
    width: '100%',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '10px',
    marginRight: '10px'
  }
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h5" className={classes.brand}>
          BEAMMART
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
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h2" component="h2" className={classes.title}>
              Discover Products Sold Nearby.
                  </Typography>
            <Typography variant="body2" component="p" className={classes.downloadText}>
              Download the Beammart app
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
          </CardContent>
        </Card>

        <CustomCard image={HomeImage} title="Personalized Recommendations" description="Get recommendations tailored to your taste" />
        <CustomCard image={DirectionsImage} title="Directions" description="Get directions from your current location to the shop" />
        <CustomCard image={SearchImage} title="Search" description="Find what you are looking for with the search functionality" />
        {/* <CustomCard image={CategoryImage} title="Different Categories" description="Discover products across categories" />
        <CustomCard image={WishlistImage} title="Wishlist" description="Save Items you might want to buy in a wishlist" />
        <CustomCard image={ShopImage} title="Merchant Details" description="Find more about the shop including operating hours and more products" /> */}
        <Card className={classes.merchantPaper} >
          <CardContent>
            <Typography gutterBottom variant="h2" component="h2" className={classes.title}>
              For Merchants
            </Typography>
            <Typography className={classes.title}>
              List your products and let potential customers discover and find them on Beammart.
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
          </CardContent>
        </Card>
        <CustomCard image={ManageImage} title="Manage Listings" description="Manage all your listings in one place" />
        <CustomCard image={AddImage} title="List Products" description="Easily pick images and add your product catalog on Beammart" />
        {/* <CustomCard image={EditImage} title="Edit Listings" description="Add new product images, change price and edit product information" /> */}
        <CustomCard image={AnalyticsImage} title="Analytics" description="See how consumers are engaging with your listings" />
        {/* <CustomCard image={ProfileImage} title="Create Profile" description="Create your business profile in easy steps to help consumers find you" />
        <CustomCard image={CategoriesImage} title="Product Categories" description="List across many categories on Beammart" /> */}
      </div>
      <Footer />
    </Grid>
  );
}


export default App;
