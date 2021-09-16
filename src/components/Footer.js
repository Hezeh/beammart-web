import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
            {'Copyright © '}
            <Link color="inherit" href="https://beammart.app/">
                Beammart Corporation
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <>
            <footer className={classes.footer}>
                <Grid container>

                    <Grid item xs={6} sm={6}>
                        <Typography variant="h6" color="secondary" align="center" gutterBottom>About Us</Typography>
                        <Typography variant="h6" color="secondary" align="center" gutterBottom>Suppliers</Typography>
                        <Typography variant="h6" color="secondary" align="center" gutterBottom>Distributors</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Typography variant="h6" color="secondary" align="center" gutterBottom>Resource Center</Typography>
                        <Typography variant="h6" color="secondary" align="center" gutterBottom>Our Partners</Typography>
                        <Typography variant="h6" color="secondary" align="center" gutterBottom>How It Works</Typography>
                    </Grid>
                    <Copyright />
                </Grid>
            </footer>
        </>
    );
}