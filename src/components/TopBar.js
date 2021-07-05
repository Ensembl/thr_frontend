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
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchForm from "./home/SearchForm";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 800,
        fontStyle: "italic",
        textDecoration: "none !important",
    },
}));

export default function TopBar(props) {
    const classes = useStyles();

    // IDEA: we can store other infos in user object
    // const user = useSelector(state => state.authentication.user);
    const isLoggedIn = useSelector(state => state.authentication.loggedIn);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <a href="/">The Track Hub Registry</a>
                    </Typography>
                    <SearchForm/>
                    <IconButton aria-label="home page" color="inherit" href="/">
                        <HomeIcon/>
                    </IconButton>
                    {isLoggedIn ? null : <Button disabled color="inherit" href="/register">Register</Button>}
                    {isLoggedIn ? null : <Button color="inherit" href="/login">Login</Button>}
                    {isLoggedIn ? <Button color="inherit" href="/user">Dashboard</Button> : null}
                    {isLoggedIn ?
                        <Button color="inherit" href="/update_password">Update Password</Button> : null}
                    {isLoggedIn ?
                        <Button color="inherit" href="/login">Logout</Button> : null}
                </Toolbar>
            </AppBar>
        </div>
    );
}