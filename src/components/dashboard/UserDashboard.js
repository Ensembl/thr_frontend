import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Breadcrumbs from "../Breadcrumbs";
import UserProfile from "./UserProfile";
import UserTrackhubs from "./UserTrackhubs";
import {withStyles} from "@material-ui/core/styles";
import * as settings from "../../settings";
import axios from "axios";
import SubmitHub from "./SubmitHub";

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
                <Box p={3}>
                    <Typography>{children}</Typography>
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

class UserDashboard extends Component {

    constructor() {
        super();
        this.state = {
            userInfo: [],
            userHubs: [],
            value: 1
        };
    }

    getUserInfo() {
        const token = localStorage.getItem('token');
        const apiUrlTrackdbs = `${settings.API_SERVER}/api/search/trackdb/1/`;
        const apiUrlUserInfo = `${settings.API_SERVER}/api/user/`;

        axios.get(apiUrlUserInfo, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        )
        .then(response => {
            console.log("getUserInfo response ---> ", response)
            this.setState({userInfo: response.data});
        })
        .catch(err => {
            console.log(err)
        });
    }

    getUserHubs() {
        const token = localStorage.getItem('token');
        const apiUrlUserHubs = `${settings.API_SERVER}/api/trackhub/`;

        axios.get(apiUrlUserHubs, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        )
        .then(response => {
            // console.log("getUserHubs response ---> ", response)
            this.setState({userHubs: response.data});
        })
        .catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getUserInfo()
        this.getUserHubs()
    }

    render() {
        const {classes} = this.props;
        const handleChange = (event, newValue) => {
            this.setState({
                value: newValue
            })
        };

        return (
            <div className={classes.root}>
                <Breadcrumbs></Breadcrumbs>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Profile" {...a11yProps(0)} />
                        <Tab label="My track collections" {...a11yProps(1)} />
                        <Tab label="Submit/Update" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                    <UserProfile userInfo = {this.state.userInfo}></UserProfile>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <UserTrackhubs userHubs = {this.state.userHubs}></UserTrackhubs>
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    <SubmitHub></SubmitHub>
                </TabPanel>
            </div>
        )
    }
}

export default withStyles(useStyles)(UserDashboard);