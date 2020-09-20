import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavItems } from './navbar-style'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link href={"/"}><a>Root AI</a></Link>
                    </Typography>
                    <NavItems>
                        <Button color="inherit"><Link href={"/about"}><a>About</a></Link></Button>
                        <Button color="inherit"><Link href={"/product"}><a>Product</a></Link></Button>
                        <Button color="inherit"><Link href={"/team"}><a>Team</a></Link></Button>
                        <Button color="inherit"><Link href={"/contact"}><a>Contact</a></Link></Button>
                    </NavItems>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar