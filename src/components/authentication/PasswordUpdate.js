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

import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Button, Container, CssBaseline, TextField, Typography} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {userActions} from "../../_actions";
import Alert from "@material-ui/lab/Alert";
import {AlertTitle} from "@material-ui/lab";


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
    },
    spacingDown: {
        marginBottom: '10px'
    }
}));

function PasswordUpdate() {
    const classes = useStyles();

    const [inputs, setInputs] = useState({
        old_password: '',
        new_password1: '',
        new_password2: ''
    });
    // eslint-disable-next-line
    const [submitted, setSubmitted] = useState(false);
    const {old_password, new_password1, new_password2} = inputs;
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const location = useLocation();

    const alert = useSelector(state => state.alert);
    let alertMessageObject = Object.keys(alert).length > 0 ? JSON.parse(alert.message) : {}

    function handleChange(e) {
        const {name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (old_password && new_password1 && new_password2 && new_password1 === new_password2) {
            dispatch(userActions.changePassword(old_password, new_password1, new_password2));
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                {alertMessageObject && alertMessageObject.success &&
                <Alert severity={alert.type}>{alertMessageObject.success}</Alert>
                }
                <Avatar className={classes.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.spacingDown}>
                    Update Password
                </Typography>
                {alertMessageObject && alertMessageObject.non_field_errors &&
                <Alert severity={alert.type}>
                    <AlertTitle>Error</AlertTitle>
                    <ul>
                        {
                            alertMessageObject.non_field_errors.map(err =>
                                <li>{err}</li>
                            )
                        }
                    </ul>
                </Alert>
                }
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
                        onChange={handleChange}
                    />
                    {alertMessageObject && alertMessageObject.old_password &&
                    <Alert severity={alert.type}>{alertMessageObject.old_password[0]}</Alert>
                    }
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="new_password1"
                        label="New Password"
                        type="password"
                        id="new_password1"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        error={new_password1 !== new_password2}
                        helperText={new_password1 !== new_password2 ? "Passwords don't match" : null}
                    />
                    {alertMessageObject && alertMessageObject.error &&
                    <Alert severity={alert.type}>{alertMessageObject.error[0]}</Alert>
                    }
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