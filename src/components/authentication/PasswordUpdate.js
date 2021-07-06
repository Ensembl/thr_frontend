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
import axios from 'axios';
import * as settings from '../../settings';

import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Button, Container, CssBaseline, TextField, Typography} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    success: {
        color: theme.palette.success.main,
    }
}));

function PasswordUpdate(props) {
    const classes = useStyles();
    const [old_password, setOldPassword] = React.useState(null);
    const [new_password1, setNewPassword1] = React.useState(null);
    const [new_password2, setNewPassword2] = React.useState(null);
    const [success, setSuccess] = React.useState(false);

    const handleFormFieldChange = (event) => {
        setSuccess(false);
        switch (event.target.id) {
            case 'old_password':
                setOldPassword(event.target.value);
                break;
            case 'new_password1':
                setNewPassword1(event.target.value);
                break;
            case 'new_password2':
                setNewPassword2(event.target.value);
                break;
            default:
                return null;
        }

    };

    const handleSubmit = e => {

        let user = JSON.parse(localStorage.getItem('user'));

        e.preventDefault();
        if (new_password1 !== new_password2) {
            alert("Passwords don't match")
        } else {
            let passwordData = {
                "old_password": old_password,
                "new_password1": new_password1,
                "new_password2": new_password2
            }
            axios.put(`${settings.API_SERVER}/api/change_password`, passwordData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${user.token}`
                    }
                }
            )
                .then(response => {
                    setSuccess(true);
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                {success ? <Typography variant="button" className={classes.success} gutterBottom>Password update
                    successful!</Typography> : null}
                <Avatar className={classes.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Update Password
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="old_password"
                        label="Old Password"
                        type="password"
                        id="old_password"
                        onChange={handleFormFieldChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="new_password1"
                        label="New Password"
                        type="password"
                        id="new_password1"
                        onChange={handleFormFieldChange}
                        error={new_password1 !== new_password2}
                        helperText={new_password1 !== new_password2 ? "Passwords don't match" : null}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="new_password2"
                        label="New Password (Confirmation)"
                        type="password"
                        id="new_password2"
                        onChange={handleFormFieldChange}
                        error={new_password1 !== new_password2}
                        helperText={new_password1 !== new_password2 ? "Passwords don't match" : null}
                    />
                    <Button
                        // disabled
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
                    </Button>
                </form>
            </div>
        </Container>
    );
}


export default PasswordUpdate;