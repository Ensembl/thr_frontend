import React, {useEffect} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Collapse, ListSubheader} from "@mui/material";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import HttpIcon from '@mui/icons-material/Http';
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nestedLvl1: {
        paddingLeft: theme.spacing(5),
    },
    nestedLvl2: {
        paddingLeft: theme.spacing(10),
    },
    item: {
        listStyleType: 'none',
        // marginBottom: '-10px',
        // marginTop: '-10px',
        textDecoration: 'inherit',
        color: 'inherit',
        marginRight: 'auto'
    },
}));

export default function ApisDocsMenu() {
    const classes = useStyles();

    useEffect(() => {
        // get the last part of the url
        // e.g. docs/management/overview => overview
        const lastUrlPart = window.location.pathname.split("/").pop();
        console.log(lastUrlPart)

        // keep the appropriate element expanded based on the URL
        if (lastUrlPart === "apis") {
            setTrhApisOpen(true);
        } else if (lastUrlPart === "info") {
            setInfoApisOpen(true);
        } else if (lastUrlPart === "registration" || lastUrlPart === "login" ||
            lastUrlPart === "thregister" || lastUrlPart === "thlist" ||
            lastUrlPart === "thupdate" || lastUrlPart === "thdelete" ||
            lastUrlPart === "logout" || lastUrlPart === "reference"
        ) {
            setRegistrationApiOpen(true);
        } else if (lastUrlPart === "search") {
            setSearchApiOpen(true);
        }
    }, []);

    const [trhApisOpen, setTrhApisOpen] = React.useState(false);
    const [infoApisOpen, setInfoApisOpen] = React.useState(false);
    const [registrationApiOpen, setRegistrationApiOpen] = React.useState(false);
    const [searchApiOpen, setSearchApiOpen] = React.useState(false);

    const handleTrhApisOpen = () => {
        setTrhApisOpen(!trhApisOpen);
    };

    const handleInfoApisOpen = () => {
        setInfoApisOpen(!infoApisOpen);
    };

    const handleRegistrationApiOpen = () => {
        setRegistrationApiOpen(!registrationApiOpen);
    };

    const handleSearchApiOpen = () => {
        setSearchApiOpen(!searchApiOpen);
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">API Docs</ListSubheader>}
                >
                    <ListItem button key='thr_apis' onClick={handleTrhApisOpen}>
                        <ListItemIcon><HttpIcon/></ListItemIcon>
                        <Link to="/docs/apis" className={classes.item} underline="none">
                            <ListItemText primary='Track Hub Registry APIs' onClick={handleTrhApisOpen}/>
                        </Link>
                        {trhApisOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={trhApisOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <HashLink to="/docs/apis#request" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='request'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="API Requests"/>
                                </ListItem>
                            </HashLink>
                            <List>
                                <HashLink to="/docs/apis#auth" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='request'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Authentication"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/apis#requestheaders" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='request'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Request Headers"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/apis#requestbodies" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='request'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Request Bodies"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                            <HashLink to="/docs/apis#response" className={classes.item} underline="none">

                                <ListItem button className={classes.nestedLvl1} key='request'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="API Responses"/>
                                </ListItem>
                            </HashLink>
                        </List>
                    </Collapse>
                    {trhApisOpen ? <Divider/> : <span/>}

                    <ListItem button key='info_api' onClick={handleInfoApisOpen}>
                        <ListItemIcon><HttpIcon/></ListItemIcon>
                        <Link to="/docs/api/info" className={classes.item} underline="none">
                            <ListItemText primary='Info API' onClick={handleInfoApisOpen}/>
                        </Link>
                        {infoApisOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={infoApisOpen} timeout="auto" unmountOnExit>
                        <List>
                            <HashLink to="/docs/api/info#version" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='version'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/version"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/info#ping" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='ping'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/ping"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/info#species" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='species'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/species"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/info#assemblies" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='assemblies'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/assemblies"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/info#hubassemblies" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='hubassemblies'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/hubs_per_assembly/:assembly"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/info#tracksassemblies" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='tracksassemblies'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/tracks_per_assembly/:assembly"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/info#trackhubs" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='trackhubs'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/info/trackhubs"/>
                                </ListItem>
                            </HashLink>
                        </List>
                    </Collapse>
                    {infoApisOpen ? <Divider/> : <span/>}

                    <ListItem button key='registration_api' onClick={handleRegistrationApiOpen}>
                        <ListItemIcon><HttpIcon/></ListItemIcon>
                        <Link to="/docs/api/registration" className={classes.item} underline="none">
                            <ListItemText primary='Registration API'/>
                        </Link>
                        {registrationApiOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={registrationApiOpen} timeout="auto" unmountOnExit>
                        <List>
                            <HashLink to="/docs/api/registration#authentication" className={classes.item}
                                      underline="none">
                                <ListItem button className={classes.nestedLvl1} key='authentication'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="Authentication"/>
                                </ListItem>
                            </HashLink>

                            <HashLink to="/docs/api/registration#workflow" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='workflow'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="A Simplified RESTful workflow"/>
                                </ListItem>
                            </HashLink>
                            <List>
                                <HashLink to="/docs/api/registration/workflow/login" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='wf_login'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Logging in"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/workflow/thregister" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='thregister'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Registering Track Hubs"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/workflow/thlist" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='thlist'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Retrieve the list of registered track hubs"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/workflow/thupdate" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='thupdate'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Updating Track Hubs"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/workflow/thdelete" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='thdelete'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Deleting Registered Track Hubs"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/workflow/logout" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='wf_logout'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="Log out"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                            <HashLink to="/docs/api/registration/reference" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='reference'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="API Reference"/>
                                </ListItem>
                            </HashLink>
                            <List>
                                <HashLink to="/docs/api/registration/reference#login" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='login'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="GET /api/login"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#get_trackhub" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='get_trackhub'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="GET /api/trackhub"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#post_trackhub" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='post_trackhub'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="POST /api/trackhub"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#get_trackhub_id" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='get_trackhub_id'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="GET /api/trackhub/:id"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#delete_trackhub_id"
                                          className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='delete_trackhub_id'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="DELETE /api/trackhub/:id"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#get_trackdb" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='get_trackdb'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="GET /api/trackdb/:id"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#delete_trackdb" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='delete_trackdb'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="DELETE /api/trackdb/:id"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/api/registration/reference#logout" className={classes.item}
                                          underline="none">
                                    <ListItem button className={classes.nestedLvl2} key='logout'>
                                        <ListItemIcon><HttpIcon/></ListItemIcon>
                                        <ListItemText primary="GET /api/logout"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                        </List>
                    </Collapse>
                    {registrationApiOpen ? <Divider/> : <span/>}

                    <ListItem button key='search_api' onClick={handleSearchApiOpen}>
                        <ListItemIcon><HttpIcon/></ListItemIcon>
                        <Link to="/docs/api/search" className={classes.item} underline="none">
                            <ListItemText primary='Search API'/>
                        </Link>
                        {searchApiOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={searchApiOpen} timeout="auto" unmountOnExit>
                        <List>
                            <HashLink to="/docs/api/search#search" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='search'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="POST /api/search"/>
                                </ListItem>
                            </HashLink>
                            <HashLink to="/docs/api/search#trackdb" className={classes.item} underline="none">
                                <ListItem button className={classes.nestedLvl1} key='trackdb'>
                                    <ListItemIcon><HttpIcon/></ListItemIcon>
                                    <ListItemText primary="GET /api/search/trackdb/:id"/>
                                </ListItem>
                            </HashLink>
                        </List>
                    </Collapse>
                </List>

            </div>
        </Drawer>
    );
}
