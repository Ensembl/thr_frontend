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
import SearchIcon from '@material-ui/icons/Search';
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 300;

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

export default function SearchDocsMenu() {
    const classes = useStyles();


    useEffect(() => {
        // get the last part of the url
        // e.g. docs/management/overview => overview
        const lastUrlPart = window.location.pathname.split("/").pop();
        console.log(lastUrlPart)

        if (lastUrlPart === "results") {
            setSearchResPageOpen(true);
        }
    }, []);

    const [searchResPageOpen, setSearchResPageOpen] = React.useState(false);

    const handleSearchResPageOpen = () => {
        setSearchResPageOpen(!searchResPageOpen);
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
                        subheader={<ListSubheader component="div">Search Docs</ListSubheader>}
                    >
                        <ListItem button key='basic_search'>
                            <ListItemIcon><SearchIcon/></ListItemIcon>
                            <Link to="/docs/search" className={classes.item} underline="none">
                                <ListItemText primary='Basic Track Hub Search'/>
                            </Link>
                        </ListItem>

                        <ListItem button key='search_results' onClick={handleSearchResPageOpen}>
                            <ListItemIcon><SearchIcon/></ListItemIcon>
                            <Link to="/docs/search/results" className={classes.item} underline="none">
                                <ListItemText primary='Search Results Page' onClick={handleSearchResPageOpen}/>
                            </Link>
                            {searchResPageOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={searchResPageOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <HashLink to="/docs/search/results#filter" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='filter'>
                                        <ListItemIcon><SearchIcon/></ListItemIcon>
                                        <ListItemText primary="Filtering Results"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/search/results#status" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='status'>
                                        <ListItemIcon><SearchIcon/></ListItemIcon>
                                        <ListItemText primary="Data Tracks Status"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/search/results#load" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='load'>
                                        <ListItemIcon><SearchIcon/></ListItemIcon>
                                        <ListItemText primary="Loading Track Hubs into Genome Browsers"/>
                                    </ListItem>
                                </HashLink>
                                <HashLink to="/docs/search/results#view" className={classes.item} underline="none">
                                    <ListItem button className={classes.nestedLvl1} key='view'>
                                        <ListItemIcon><SearchIcon/></ListItemIcon>
                                        <ListItemText primary="Viewing more information"/>
                                    </ListItem>
                                </HashLink>
                            </List>
                        </Collapse>
                        {searchResPageOpen ? <Divider/> : <span/>}

                        <ListItem button key='advanced_search'>
                            <ListItemIcon><SearchIcon/></ListItemIcon>
                            <Link to="/docs/search/advanced" className={classes.item} underline="none">
                                <ListItemText primary='Advanced Search'/>
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
