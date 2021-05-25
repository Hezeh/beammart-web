import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        minHeight: 550,
        // minHeight: 'auto',
        display: 'flex',
        // margin: '5px',
    },
    media: {
        height: 200,
        paddingTop: '56.25%',
        width: '50%',
        alignContent: 'center',
        marginLeft: '100px',
        marginTop: '5px',
    },
});

export default function CustomCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.title}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     details: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     content: {
//         flex: '1 0 auto',
//     },
//     cover: {
//         width: 151,
//     },
//     controls: {
//         display: 'flex',
//         alignItems: 'center',
//         paddingLeft: theme.spacing(1),
//         paddingBottom: theme.spacing(1),
//     },
//     playIcon: {
//         height: 38,
//         width: 38,
//     },
// }));

// export default function CustomCard(props) {
//     const classes = useStyles();
//     const theme = useTheme();

//     return (
//         <Card className={classes.root}>
//             <div className={classes.details}>
//                 <CardContent className={classes.content}>
//                     <Typography component="h5" variant="h5">
//                         {props.title}
//           </Typography>
//                     <Typography variant="subtitle1" color="textSecondary">
//                         {props.description}
//           </Typography>
//                 </CardContent>
//                 {/* <div className={classes.controls}>
//                     <IconButton aria-label="previous">
//                         {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//                     </IconButton>
//                     <IconButton aria-label="play/pause">
//                         <PlayArrowIcon className={classes.playIcon} />
//                     </IconButton>
//                     <IconButton aria-label="next">
//                         {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//                     </IconButton>
//                 </div> */}
//             </div>
//             <CardMedia
//                 className={classes.cover}
//                 image={props.image}
//                 title={props.title}
//             />
//         </Card>
//     );
// }

