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

import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Checkbox from "@material-ui/core/Checkbox";

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import * as settings from "../../settings";
import axios from "axios";
import Alerts from "../Alerts";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 200,
    },
}));


const UserProfile = () => {
    const classes = useStyles();

    const token = localStorage.getItem('token');
    const header = {'Content-Type': 'application/json', 'Authorization': `Token ${token}`}
    const apiUrlUserInfo = `${settings.API_SERVER}/api/user/`;

    const handleSubmit = (e) => {
        e.preventDefault();

        const profileInfo = {
            'first_name': e.target.firstname.value,
            'last_name': e.target.lastname.value,
            'affiliation': e.target.affiliation.value,
            'email': e.target.email.value,
            'check_interval': e.target.checkInterval.value,
            'continuous_alert': e.target.continuousAlert.value,
        }

        axios.post(apiUrlUserInfo, profileInfo, {headers: header}
        )
            .then(response => {
                setMessage(response.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    // Get the user profile info
    const [profileInfo, setProfileInfo] = useState({})
    useEffect(() => {
        const apiUrlUserInfo = `${settings.API_SERVER}/api/user/`;
        axios.get(apiUrlUserInfo, {headers: header})
            .then(response => {
                // console.log(response.data);
                setProfileInfo(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    // TODO: Enable the Update button only when profileInfo changes
    // https://stackoverflow.com/a/56882036/4488332
    const [updateDisabled, setUpdateDisabled] = useState(false)

    const [message, setMessage] = React.useState(undefined);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        disabled
                        id="username"
                        label="Username"
                        value={profileInfo.username || ''}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="firstname"
                        label="First Name"
                        value={profileInfo.first_name || ''}
                        onChange={e => {
                            setProfileInfo({...profileInfo, first_name: e.target.value})
                            // TODO: improve the logic
                            // setUpdateDisabled(false)
                        }}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="lastname"
                        label="Last Name"
                        value={profileInfo.last_name || ''}
                        onChange={e => setProfileInfo({...profileInfo, last_name: e.target.value})}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="affiliation"
                        label="Affiliation"
                        value={profileInfo.affiliation || ''}
                        onChange={e => setProfileInfo({...profileInfo, affiliation: e.target.value})}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="email"
                        label="Email"
                        value={profileInfo.email || ''}
                        onChange={e => setProfileInfo({...profileInfo, email: e.target.value})}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="check-interval-label">Check Interval</InputLabel>
                        <NativeSelect
                            // labelId="check-interval-label"
                            value={profileInfo.check_interval || 'automatic'}
                            onChange={e => setProfileInfo({...profileInfo, check_interval: e.target.value})}
                            id="checkInterval"
                        >
                            <option value={'automatic'}>Automatic</option>
                            <option value={'weekly'}>Weekly</option>
                            <option value={'monthly'}>Monthly</option>
                        </NativeSelect>
                    </FormControl>
                    <br/><br/>
                    <Checkbox
                        id="continuousAlert"
                        checked={profileInfo.continuous_alert || false}
                        value={profileInfo.continuous_alert}
                        onChange={e => setProfileInfo({...profileInfo, continuous_alert: e.target.checked})}
                        inputProps={{'aria-label': 'primary checkbox'}}
                    /> Receive continuous alerts
                    <Button
                        disabled={updateDisabled}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
                    </Button>
                </form>
                {
                    // TODO:
                    //  1. refresh the page after update
                    //  2. show alert after every update click
                    //  3. auto hide 'success' alert message after few seconds?
                    message &&
                    <Alerts
                        messageType={'success'}
                        message={message.success}
                    ></Alerts>
                }
            </div>
        </Container>
    );
};

export default UserProfile;

