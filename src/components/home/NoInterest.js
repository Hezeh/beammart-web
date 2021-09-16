import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ZeroInterestRate from '../../ZeroInterestRate.png';
import Button from '@material-ui/core/Button';
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

export default function NoInterestGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="Zero Interest" src={ZeroInterestRate} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h3">
                                    Buy With Zero Interest
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                   Pay with Flexibility
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary">
                                    Upto 6 months
                                </Typography>
                            </Grid>
                            {/* <Grid item xs sm>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Get Started
                                </Typography>
                            </Grid> */}
                           <EarlyAccessButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
