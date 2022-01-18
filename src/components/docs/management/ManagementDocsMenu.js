/**
 * See the NOTICE file distributed with this work for additional information
 * regarding copyright ownership.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import {Collapse, ListSubheader} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {userActions} from "../../../_actions";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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

export default function ManagementDocsMenu() {
    const classes = useStyles();

    useEffect(() => {
        // get the last part of the url
        // e.g. docs/management/overview => overview
        const lastUrlPart = window.location.pathname.split("/").pop();
        console.log(lastUrlPart)

        if (lastUrlPart === "overview") {
            setOverviewOpen(true);
        }
        else if (lastUrlPart === "assembly_support") {
            setAssemblySupportOpen(true);
        }
        else if (lastUrlPart === "modelling") {
            setModellingThOpen(true);
        }
        else if (lastUrlPart === "dashboard") {
            setDashboardOpen(true);
        }
    }, []);

    const [overviewOpen, setOverviewOpen] = React.useState(false);
    const [assemblySupportOpen, setAssemblySupportOpen] = React.useState(false);
    const [modellingThOpen, setModellingThOpen] = React.useState(false);
    const [dashboardOpen, setDashboardOpen] = React.useState(false);

    const handleOverviewOpen = () => {
        setOverviewOpen(!overviewOpen);
    };

    const handleAssemblySupportOpen = () => {
        setAssemblySupportOpen(!assemblySupportOpen);
    };

    const handleModellingThOpen = () => {
        setModellingThOpen(!modellingThOpen);
    };

    const handleDashboardOpen = () => {
        setDashboardOpen(!dashboardOpen);
    };


    return (
        <div className={classes.root}>

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
                        subheader={<ListSubheader component="div">Track Hub Management Docs</ListSubheader>}
                    >
                        <ListItem button key='overview' onClick={handleOverviewOpen}>
                            <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                            <Link to="/docs/management/overview" className={classes.item} underline="none">
                                <ListItemText primary='Overview' onClick={handleOverviewOpen}/>
                            </Link>
                            {overviewOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={overviewOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <HashLink to="/docs/management/overview#registration" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='registration'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Client Registration"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/management/overview#management" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='management'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Track Hub Management"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/management/overview#submission" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='submission'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="The Submission Process"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                        </Collapse>
                        {overviewOpen ? <Divider/> : <span/>}

                        <ListItem button key='assembly_support' onClick={handleAssemblySupportOpen}>
                            <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                            <Link to="/docs/management/assembly_support" className={classes.item} underline="none">
                                <ListItemText primary='Supported Genome Assemblies' onClick={handleAssemblySupportOpen}/>
                            </Link>
                            {assemblySupportOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={assemblySupportOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <HashLink to="/docs/management/assembly_support#mapping" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='mapping'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Mapping Track Hub Assembly Names to INSDC Accessions"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                        </Collapse>
                        {assemblySupportOpen ? <Divider/> : <span/>}

                        <ListItem button key='modelling_th' onClick={handleModellingThOpen}>
                            <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                            <Link to="/docs/management/modelling" className={classes.item} underline="none">
                                <ListItemText primary='Modelling Track Hubs' onClick={handleModellingThOpen}/>
                            </Link>
                            {modellingThOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={modellingThOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <HashLink to="/docs/management/modelling#schema" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='schema'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Track database schema"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                        </Collapse>
                        {modellingThOpen ? <Divider/> : <span/>}

                        <ListItem button key='dashboard' onClick={handleDashboardOpen}>
                            <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                            <Link to="/docs/management/dashboard" className={classes.item} underline="none">
                                <ListItemText primary='Dashboard' onClick={handleDashboardOpen}/>
                            </Link>
                            {dashboardOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <HashLink to="/docs/management/dashboard#status" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='status'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Viewing and Editing Track Hubs"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/management/dashboard#profile" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='profile'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Updating Profile"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/management/dashboard#monitoring" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='monitoring'>
                                        <ListItemIcon><ImportContactsIcon/></ListItemIcon>
                                        <ListItemText primary="Automatic Track Hub Monitoring"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                        </Collapse>
                        {dashboardOpen ? <Divider/> : <span/>}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
