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
import {AppBar, Toolbar, Typography, Button, Container, Link} from '@mui/material';
import SearchForm from "../home/SearchForm";
import {useSelector} from "react-redux";
import DocsDropdownMenu from "../docs/DocsDropdownMenu";
import Box from "@mui/material/Box";
import SandwichMenu from "./SandwichMenu";


export default function TopBar() {
    // IDEA: we can store other infos in user object
    // const user = useSelector(state => state.authenticationReducer.user);
    const isLoggedIn = useSelector(state => state.authenticationReducer.loggedIn);

    return (
        <div>
            <AppBar position="fixed" sx={{zIndex: 1300, flexGrow: 1}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component="a"
                            href="/"
                            sx={{
                                fontWeight: 800,
                                fontStyle: "italic",
                                textDecoration: "none !important",
                                marginRight: "20px",
                                color: "inherit",
                                display: {xs: 'none', md: 'flex'},
                            }}
                        >
                            The Track Hub Registry
                        </Typography>

                        <SandwichMenu/>

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {
                                isLoggedIn ?
                                    <Button color="inherit" href="/docs/management/overview">Submit data</Button> :
                                    <Button color="inherit" href="/register">Submit data</Button>
                            }
                            <DocsDropdownMenu/>
                            <Button color="inherit" href="/about">About</Button>
                            <Button color="inherit" href="/help">Help</Button>
                            <Link
                                href="https://www.ebi.ac.uk/long-term-data-preservation"
                                rel="noreferrer"
                                underline="hover"
                                color="inherit"
                                target="_blank">Data Preservation</Link>
                            <Typography sx={{flexGrow: 1}}/>
                            <SearchForm/>
                            {isLoggedIn ? null : <Button color="inherit" href="/register">Register</Button>}
                            {isLoggedIn ? null : <Button color="inherit" href="/login">Login</Button>}
                            {isLoggedIn ? <Button color="inherit" href="/user">Dashboard</Button> : null}
                            {isLoggedIn ?
                                <Button color="inherit" href="/update_password">Update Password</Button> : null}
                            {isLoggedIn ?
                                <Button color="inherit" href="/login">Logout</Button> : null}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <br/>
            <Toolbar/>
        </div>
    );
}