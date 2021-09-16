import ioslogo from '../ios_logo.svg';
import playBadge from '../google-play-badge.png';
import HomeImage from '../ss-2.webp';
import DirectionsImage from '../ss-3.webp';
import SearchImage from '../ss-5.webp';
import AnalyticsImage from '../ss-11.webp';
import AddImage from '../ss-12.webp';
import ManageImage from '../ss-17.webp';
import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CustomCard from '../CustomCard';
import Footer from './Footer';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CustomAppBar from './CustomAppBar';
import { motion } from "framer-motion"
import NoInterestGrid from './home/NoInterest';
import IntroCard from './home/IntroCard';
import SupplierEarlyAccessButton from './home/SupplierEarlyAccessButton';
import CreditLimitGrid from './home/CreditLimitGrid';
import SplitPaymentsGrid from './home/SplitPayments';

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
        // display: 'flex',
        flexWrap: 'wrap',
        // '& > *': {
        //     margin: theme.spacing(1),
        //     width: theme.spacing(1000),
        //     height: theme.spacing(40),
        // },
        margin: theme.spacing(1),
        // background: 'linear-gradient(90deg, #f7ff00 10%, #f12711 60%, #db36a4 90%)',
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

function Home() {
    const classes = useStyles();
    return (
        <Grid className={classes.all}>
            <CustomAppBar />
            <div className={classes.root}>
                <IntroCard />
                <NoInterestGrid />
                <CreditLimitGrid />
                <SplitPaymentsGrid />
                <Card className={classes.merchantPaper} >
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2" className={classes.title}>
                            For Suppliers, Distributors, Wholesalers and Resellers
                        </Typography>
                        <Typography className={classes.title}>
                            Sign Up and let merchants discover your products
                            and pay for them with Flexibility.
                        </Typography>
                        <div className={classes.button}>
                            <SupplierEarlyAccessButton />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </Grid>
    );
}


export default Home;