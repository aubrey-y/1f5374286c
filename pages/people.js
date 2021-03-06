import React from 'react';
import {withRouter} from 'next/router';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/api/NPS_Query';
import fetch from 'isomorphic-unfetch';
import {
    Button,
    Divider,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import LaunchIcon from '@material-ui/icons/Launch';
import '../static/default.css';

const useStyles = makeStyles(theme => ({
    paper:{
        padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    grid: {
        [theme.breakpoints.up('xs')]: {
            paddingLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(30),
        },
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    image: {
        width: "100%",
        position: "relative",
        objectFit: 'cover',
    },
    p: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "large",
        },
        [theme.breakpoints.up('lg')]:{
            fontSize: "x-large",
        },
    },
    maintitle: {
        [theme.breakpoints.only('xs')]:{
            fontSize: "xx-large"
        },
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function CenteredGrid({people}){
    const classes = useStyles();

    React.useEffect(() => {
        document.title = "People";
    }, []);

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {people.map((peopleObj) => (
                    <Grid key={peopleObj.title} item xs={12} md={6} lg={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}} className={classes.maintitle}>
                                {peopleObj.title}
                            </Typography>
                            <Divider/><br/>
                            <div id="trim">
                                {(peopleObj.listingimage.url.length > 0) ? <img className={classes.image} src={peopleObj.listingimage.url}/> : <span/> }
                            </div>
                            {(peopleObj.listingimage.url.length > 0) ? <br/> : <span/>}
                            <Typography paragraph className={classes.p}>
                                {peopleObj.listingdescription}
                            </Typography>
                            {(peopleObj.url.length > 0) ?
                                <Button href={peopleObj.url} color="primary" className={classes.button}>
                                    {"Read More About " + peopleObj.title}
                                    <LaunchIcon className={classes.rightIcon}/>
                                </Button> : <span/>}
                            <Divider/>
                        </Paper>
                    </Grid>
                ))}
                {(people.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No Notable People Found
                            </Typography>
                        </Paper>
                    </Grid> : <span/>}
            </Grid>
        </main>
    )
}

const People = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " People"} park={props.router.query.objectId} current="People"/>
        <CenteredGrid people={props.people.data}/>
    </div>
));

People.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId, []));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("people", objectId, []));
    const people = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, people};
};

export default People;