import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from "framer-motion"
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import {
    Link,
    useRouteMatch,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: 25,
        textDecoration: 'none',
        textTransform: 'secondary',
        color: 'white'
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sideBarLink: {
        textDecoration: 'none',
        textTransform: 'secondary',
        color: 'white'
    },
    sideBarLinkActive: {
        textDecoration: 'none',
        textTransform: 'secondary',
        color: 'pink'
    },
}));

function AppBarLink({ label, to, activeOnlyWhenExact }) {
    const classes = useStyles();
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return (
        <Link to={to} className={match ? classes.sideBarLinkActive : classes.sideBarLink}>
            {label}
        </Link>
    )
}


export default function CustomAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Divider />
                <AppBarLink label=
                    {
                        <ListItem
                            button
                            key="Suppliers"
                        >
                            <ListItemText primary="Suppliers" />
                        </ListItem>
                    }
                    to="/suppliers"
                    activeOnlyWhenExact={true}
                />
                <Divider />
                <AppBarLink label=
                    {
                        <ListItem
                            button
                            key="About Us"
                        >
                            <ListItemText primary="About Us" />
                        </ListItem>
                    }
                    to="/about"
                    activeOnlyWhenExact={true}
                />
                <Divider />
                <AppBarLink label=
                    {
                        <ListItem
                            button
                            key="Pricing"
                        >
                            <ListItemText primary="Pricing" />
                        </ListItem>
                    }
                    to="/pricing"
                    activeOnlyWhenExact={true}
                />
                <Divider />
                <AppBarLink label=
                    {
                        <ListItem
                            button
                            key="Businesses"
                        >
                            <ListItemText primary="Businesses" />
                        </ListItem>
                    }
                    to="/businesses"
                    activeOnlyWhenExact={true}
                />
                <Divider />
                <AppBarLink label=
                    {
                        <ListItem
                            button
                            key="Resources Center"
                        >
                            <ListItemText primary="Resources Center" />
                        </ListItem>
                    }
                    to="/businesses"
                    activeOnlyWhenExact={true}
                />
                <Divider />
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="menu"
                            color="inherit"
                            className={classes.menuButton}
                            edge="start"
                            onClick={toggleDrawer("left", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Drawer
                        anchor="left" open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    <Link
                        to="/"
                        className={classes.title}
                    >
                        <Typography
                            variant="h6"
                            className={classes.title}
                        >
                            BeamFlex
                        </Typography>
                    </Link>
                   
                    <div className={classes.sectionDesktop}>
                        <AppBarLink label=
                            {
                                <Button color="inherit">Suppliers</Button>
                            }
                            to="/suppliers"
                            activeOnlyWhenExact={true}
                        />
                        <AppBarLink label=
                            {
                                <Button color="inherit">About Us</Button>
                            }
                            to="/about"
                            activeOnlyWhenExact={true}
                        />
                        <AppBarLink label=
                            {
                                <Button color="inherit">Pricing</Button>
                            }
                            to="/pricing"
                            activeOnlyWhenExact={true}
                        />
                        <AppBarLink label=
                            {
                                <Button color="inherit">Businesses</Button>
                            }
                            to="/businesses"
                            activeOnlyWhenExact={true}
                        />
                        <AppBarLink label=
                            {
                                <Button color="inherit">Resource Center</Button>
                            }
                            to="/resources"
                            activeOnlyWhenExact={true}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
