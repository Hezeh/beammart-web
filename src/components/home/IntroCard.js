import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import playBadge from '../../google-play-badge.png';
import EarlyAccessButton from './EarlyAccessButton';

const useStyles = makeStyles((theme) => ({
    card: {
        background: 'linear-gradient(90deg, #ec008c 10%, #fc6767 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 'auto',
    },
    title: {
        // flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: theme.spacing(1),
        // paddingTop: 50,
        flexGrow: 1,
        justifyContent: 'center',
        display: 'flex'
    },
    downloadText: {
        textAlign: 'center',
    },
}));

export default function IntroCard() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h2"
                    component="h2"
                    className={classes.title}
                >
                    Buy Now, Pay Later for Businesses
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    className={classes.downloadText}
                >
                    The best way for small businesses to pay suppliers, wholesalers,
                    distributors, resellers and manufacturers
                </Typography>
                <div className={classes.button}>
                    <EarlyAccessButton />
                </div>
            </CardContent>
        </Card>
    );
}