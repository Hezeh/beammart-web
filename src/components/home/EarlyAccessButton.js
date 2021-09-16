import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        background: 'linear-gradient(45deg, #5433FF 30%, #20BDFF 60%)',
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginBottom: '20px',
        maxWidth: '500px'
    },
}));

export default function EarlyAccessButton() {
    const classes = useStyles();
    return (
        <Button
            className={classes.button}
        >
            Get Early Access
        </Button>
    );
}