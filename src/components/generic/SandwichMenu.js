import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux";
import UploadIcon from '@mui/icons-material/Upload';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HttpIcon from '@mui/icons-material/Http';
import DataObjectIcon from '@mui/icons-material/DataObject';
import {Collapse} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const drawerWidth = 320;

function SandwichMenu(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // IDEA: we can store other infos in user object
    // const user = useSelector(state => state.authenticationReducer.user);
    const isLoggedIn = useSelector(state => state.authenticationReducer.loggedIn);

    // For Documentation (nested list)
    const [openDocs, setOpenDocs] = React.useState(false);
    const handleDocsClick = () => {
        setOpenDocs(!openDocs);
    };

    const [openSearch, setOpenSearch] = React.useState(false);
    const handleSearchClick = () => {
        setOpenSearch(!openSearch);
    };

    const [openManagment, setOpenManagment] = React.useState(false);
    const handleManagmentClick = () => {
        setOpenManagment(!openManagment);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <CssBaseline/>
                <IconButton
                    color="inherit"
                    size="large"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    <div>
                        <Toolbar/>
                        <List>
                            {
                                isLoggedIn ?
                                    <ListItem button component="a" href="/docs/management/overview" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <UploadIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Submit data"/>
                                        </ListItemButton>
                                    </ListItem>
                                    :
                                    <ListItem button component="a" href="/register" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <UploadIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Submit data"/>
                                        </ListItemButton>
                                    </ListItem>
                            }
                            <ListItemButton onClick={handleDocsClick}>
                                <ListItemIcon>
                                    <ArticleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Documentation"/>
                                {openDocs ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openDocs} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 4}} onClick={handleSearchClick}>
                                        <ListItemIcon>
                                            <SearchIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Searching Track Hubs"/>
                                        {openSearch ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={openSearch} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button component="a" href="/docs/search"  sx={{pl: 8}}>
                                                <ListItemIcon>
                                                    <SearchIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Basic Search"/>
                                            </ListItem>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItem button component="a" href="/docs/search/advanced"  sx={{pl: 8}}>
                                                <ListItemIcon>
                                                    <SearchIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Advanced Search"/>
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                    <ListItemButton sx={{pl: 4}} onClick={handleManagmentClick}>
                                        <ListItemIcon>
                                            <ImportContactsIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Registering/Managing Track Hubs"/>
                                        {openManagment ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={openManagment} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button component="a" href="/docs/management/overview"  sx={{pl: 8}}>
                                                <ListItemIcon>
                                                    <ImportContactsIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Overview"/>
                                            </ListItem>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItem button component="a" href="/docs/management/assembly_support"  sx={{pl: 8}}>
                                                <ListItemIcon>
                                                    <ImportContactsIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Supported Genome Assemblies"/>
                                            </ListItem>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItem button component="a" href="/docs/management/modelling"  sx={{pl: 8}}>
                                                <ListItemIcon>
                                                    <ImportContactsIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Modelling Track Hubs"/>
                                            </ListItem>
                                        </List>
                                        <List component="div" disablePadding>
                                            <ListItem button component="a" href="/docs/management/dashboard"  sx={{pl: 8}}>
                                                <ListItemIcon>
                                                    <ImportContactsIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Dashboard"/>
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                    <ListItem button component="a" href="/docs/apis" sx={{pl: 4}}>
                                        <ListItemIcon>
                                            <HttpIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Registry APIs"/>
                                    </ListItem>
                                    <ListItem button component="a" href="/docs/management/modelling" sx={{pl: 4}}>
                                        <ListItemIcon>
                                            <DataObjectIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="TrackDB JSON specification"/>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <ListItem button component="a" href="/about" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InfoIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="About"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem button component="a" href="/help" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HelpIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Help"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem button component="a"
                                rel="noreferrer"
                                color="inherit"
                                target="_blank"
                                href="https://www.ebi.ac.uk/long-term-data-preservation" disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InfoIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Data Preservation"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider/>
                        <List>
                            {
                                isLoggedIn ?
                                    null
                                    :
                                    <ListItem button component="a" href="/register" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <HowToRegIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Register"/>
                                        </ListItemButton>
                                    </ListItem>
                            }
                            {
                                isLoggedIn ?
                                    null
                                    :
                                    <ListItem button component="a" href="/login" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LoginIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Login"/>
                                        </ListItemButton>
                                    </ListItem>
                            }
                            {
                                isLoggedIn ?
                                    <ListItem button component="a" href="/user" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DashboardIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Dashboard"/>
                                        </ListItemButton>
                                    </ListItem>
                                    :
                                    null
                            }
                            {
                                isLoggedIn ?
                                    <ListItem button component="a" href="/update_password" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <VpnKeyIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Update Password"/>
                                        </ListItemButton>
                                    </ListItem>
                                    :
                                    null
                            }
                            {
                                isLoggedIn ?
                                    <ListItem button component="a" href="/login" disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LogoutIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Logout"/>
                                        </ListItemButton>
                                    </ListItem>
                                    :
                                    null
                            }
                        </List>
                    </div>
                </Drawer>
            </Box>

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
                    display: {xs: 'flex', md: 'none'},
                    flexGrow: 1,
                }}
            >
                The Track Hub Registry
            </Typography>
        </>

    );
}

export default SandwichMenu;
