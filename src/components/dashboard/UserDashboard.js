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
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MainBreadcrumbs from "../MainBreadcrumb";
import Paper from "@material-ui/core/Paper";
import UserProfile from "./UserProfile";
import UserTrackhubs from "./UserTrackhubs";
import SubmitHub from "./SubmitHub";
import * as settings from "../../settings";
import axios from "axios";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                // Edited the original template to fix warnings
                // https://github.com/mui-org/material-ui/issues/21015#issuecomment-663208786
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function UserDashboard() {
    const classes = useStyles();

    // set default value to 1 which is the 'UserTrackhubs' Tab
    const [value, setValue] = React.useState(1);

    // get token from localStorage and prepare the header
    const token = localStorage.getItem('token');
    const header = {'Content-Type': 'application/json', 'Authorization': `Token ${token}`}

    const apiUrlUserHubs = `${settings.API_SERVER}/api/trackhub/`;
    const [userHubs, setUserHubs] = React.useState([])

    // Get the user track collections
    useEffect(() => {
        axios.get(apiUrlUserHubs, {headers: header})
            .then(response => {
                setUserHubs(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <MainBreadcrumbs item="Dashboard"></MainBreadcrumbs>
            <Paper square>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="My track collections" {...a11yProps(1)} />
                    <Tab label="Submit/Update" {...a11yProps(2)} />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <UserProfile></UserProfile>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserTrackhubs userHubs={userHubs}></UserTrackhubs>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SubmitHub></SubmitHub>
            </TabPanel>
        </div>
    );
}
