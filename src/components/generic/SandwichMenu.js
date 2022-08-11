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
import { Typography, Divider } from '@mui/material';
import SearchForm from "../home/SearchForm";
import {useSelector} from "react-redux";
import DocsDropdownMenu from "../docs/DocsDropdownMenu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


export default function SandwichMenu() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // IDEA: we can store other infos in user object
    // const user = useSelector(state => state.authenticationReducer.user);
    const isLoggedIn = useSelector(state => state.authenticationReducer.loggedIn);

    return (
        <>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                    }}
                >
                    <MenuItem key={"submit_data"} onClick={handleCloseNavMenu}>
                        {
                            isLoggedIn ?
                                <Typography color="inherit" component="a" href="/docs/management/overview">Submit
                                    data</Typography> :
                                <Typography color="inherit" component="a" href="/register">Submit
                                    data</Typography>
                        }
                    </MenuItem>
                    <MenuItem key={"doc_menu"}>
                        <DocsDropdownMenu/>
                    </MenuItem>
                    <MenuItem key={"about"} onClick={handleCloseNavMenu}>
                        <Typography color="inherit" component="a" href="/about">About</Typography>
                    </MenuItem>
                    <MenuItem key={"help"} onClick={handleCloseNavMenu}>
                        <Typography color="inherit" component="a" href="/help">Help</Typography>
                    </MenuItem>
                    <Divider/>
                    <MenuItem key={"search_form"}>
                        <SearchForm/>
                    </MenuItem>
                    <Divider/>
                    {isLoggedIn ? null :
                        <MenuItem key={"register"} onClick={handleCloseNavMenu}>
                            <Typography color="inherit" component="a"
                                        href="/register">Register</Typography>
                        </MenuItem>}
                    {isLoggedIn ? null :
                        <MenuItem key={"login"} onClick={handleCloseNavMenu}>

                            <Typography color="inherit" component="a" href="/login">Login</Typography>
                        </MenuItem>}
                    {isLoggedIn ?
                        <MenuItem key={"update_password"} onClick={handleCloseNavMenu}>
                            <Typography color="inherit" component="a" href="/update_password">Update
                                Password</Typography>
                        </MenuItem> : null}
                    {isLoggedIn ?
                        <MenuItem key={"logout"} onClick={handleCloseNavMenu}>
                            <Typography color="inherit" component="a" href="/">Logout</Typography>
                        </MenuItem> : null}
                </Menu>
            </Box>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    fontWeight: 800,
                    fontStyle: "italic",
                    textDecoration: "none !important",
                    marginRight: "20px",
                    color: "inherit",
                    display: {xs: 'flex', md: 'none'},
                    flexGrow: 1,
                }}
            >
                The Track Hub Registry
            </Typography>
        </>
    );
}