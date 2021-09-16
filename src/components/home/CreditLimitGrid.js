import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CreditLimit from '../../CreditLimit.png';
import EarlyAccessButton from './EarlyAccessButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        marginTop: '10px',
        marginBottom: '10px',
        background: 'linear-gradient(90deg, #40E0D0 10%, #FF8C00 30%, #FF0080 90%)',
    },
    image: {
        width: 300,
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 10,
    },
    button: {
        background: 'linear-gradient(45deg, #5433FF 30%, #20BDFF 60%)',
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginBottom: '20px',
    },
}));

export default function CreditLimitGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="Zero Interest" src={CreditLimit } />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h3">
                                    Get Upto Ksh. 100,000
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Buy Goods worth upto 100,000 and pay with ease
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary">
                                    Repayment Period Is Upto 6 months with only 20% APR
                                </Typography>
                            </Grid>
                            <EarlyAccessButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}