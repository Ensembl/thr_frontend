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

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import SearchForm from "../home/SearchForm";
import {useSelector} from "react-redux";
import DocsDropdownMenu from "../docs/DocsDropdownMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: 800,
        fontStyle: "italic",
        textDecoration: "none !important",
        marginRight: "20px",
    },
    interSpace: {
        flexGrow: 1,
    }
}));

export default function TopBar(props) {
    const classes = useStyles();

    // IDEA: we can store other infos in user object
    // const user = useSelector(state => state.authenticationReducer.user);
    const isLoggedIn = useSelector(state => state.authenticationReducer.loggedIn);

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <a href="/">The Track Hub Registry</a>
                    </Typography>
                    {
                        isLoggedIn ?
                            <Button color="inherit" href="/docs/management/overview">Submit data</Button> :
                            <Button color="inherit" href="/register">Submit data</Button>
                    }
                    <DocsDropdownMenu/>
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/help">Help</Button>
                    <span className={classes.interSpace}/>
                    <SearchForm/>
                    {isLoggedIn ? null : <Button color="inherit" href="/register">Register</Button>}
                    {isLoggedIn ? null : <Button color="inherit" href="/login">Login</Button>}
                    {isLoggedIn ? <Button color="inherit" href="/user">Dashboard</Button> : null}
                    {isLoggedIn ?
                        <Button color="inherit" href="/update_password">Update Password</Button> : null}
                    {isLoggedIn ?
                        <Button color="inherit" href="/login">Logout</Button> : null}
                </Toolbar>
            </AppBar>
            <br/>
            <Toolbar/>
        </div>
    );
}