import React from 'react';
import {withRouter} from 'next/router';
import ButtonDialog from "../components/ButtonDialog";
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import NPS_Query from '../components/api/NPS_Query';
import fetch from 'isomorphic-unfetch';
import {
    Button,
    Divider,
    Grid,
    Hidden,
    Paper,
    Typography,
    makeStyles
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import '../static/default.css';
import ContactDialog from "../components/ContactDialog";
import HoursTable from "../components/HoursTable";

const useStyles = makeStyles(theme => ({
    content:{
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    grid:{
        [theme.breakpoints.up('xs')]:{
            paddingLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]:{
            paddingLeft: theme.spacing(30),
        },
    },
    paper:{
        padding: theme.spacing(2),
    },
    maintitle:{
        [theme.breakpoints.only('xs')]:{
            fontSize: "xx-large",
        },
    },
    p:{
        [theme.breakpoints.only('xs')]:{
            fontSize: "large",
        },
    },
    rightIcon:{
        marginLeft: theme.spacing(1),
    },
    button:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
}));

function CenteredGrid({centers}){
    const classes = useStyles();

    React.useEffect(() => {
        document.title = "Visitor Centers";
    }, []);

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} className={classes.grid}>
                {centers.map((centerObj) => (
                    <Grid key={centerObj.title} item xs={12} md={6} lg={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}} className={classes.maintitle}>
                                {centerObj.name}
                            </Typography>
                            <Divider/><br/>
                            <Typography paragraph className={classes.p}>
                                {centerObj.description}
                            </Typography>
                            <Hidden xsDown>
                                {(centerObj.operatingHours != null && centerObj.operatingHours.length > 0) ?
                                    ((Array.isArray(centerObj.operatingHours.standardHours) ?
                                        (centerObj.operatingHours[0].standardHours.map((hours, index) => (
                                            <span key={index}>
                                                <Typography variant="h4">
                                                    Standard Hours
                                                    <Divider/>
                                                </Typography>
                                                <HoursTable hoursList={hours}/>
                                            </span>
                                        ))) :
                                        ([centerObj.operatingHours[0].standardHours].map((hours, index) => (
                                            <span key={index}>
                                                <Typography variant="h4">
                                                    Standard Hours
                                                    <Divider/>
                                                </Typography>
                                                <HoursTable hoursList={hours}/>
                                            </span> ))))) : <span/> }
                            </Hidden>
                            <ButtonDialog buttonName="Full Hours" hours={centerObj.operatingHours}/>
                            <ButtonDialog buttonName="Directions" addresses={centerObj.addresses} text={centerObj.directionsInfo} other="Details" otherurl={centerObj.directionsUrl}/>
                            <ContactDialog phoneNumbers={centerObj.contacts.phoneNumbers} emails={centerObj.contacts.emailAddresses}/>
                            {(centerObj.url.length > 0) ?
                                <Button href={centerObj.url} color="primary" className={classes.button}>
                                    More Information
                                    <LaunchIcon className={classes.rightIcon}/>
                                </Button> : <span/> }
                        </Paper>
                    </Grid>
                ))}
                {(centers.length === 0) ?
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography color="textPrimary" variant="h4" style={{fontWeight: 'bold'}}>
                                No Visitor Centers Found
                            </Typography>
                        </Paper>
                    </Grid> : <span/>}
            </Grid>
        </main>
    )
}

const VisitorCenters = withRouter( props => (
    <div style={{
        root:{
            flexGrow: 1,
        },
    }}>
        <ResponsiveDrawer name={props.parks.data[0].fullName + " Visitor Centers"} park={props.router.query.objectId} current="Visitor Centers"/>
        <CenteredGrid centers={props.centers.data}/>
    </div>
));

VisitorCenters.getInitialProps = async function(context) {
    const {objectId} = context.query;
    const res = await fetch(NPS_Query("parks", objectId, []));
    const parks = await res.json();

    const res2 = await fetch(NPS_Query("visitorcenters", objectId, ["contacts", "operatingHours", "addresses"]));
    const centers = await res2.json();

    console.log(`Fetched ${parks.data[0].fullName}`);

    return {parks, centers};
};

export default VisitorCenters;