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

import {Avatar, Button, Container, CssBaseline, TextField, Typography} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {userActions} from "../../redux/actions";
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import Box from "@mui/material/Box";


const styles = {
    boxStyle: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 1,
        backgroundColor: 'secondary.main',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 1,
    },
    submit: {
        marginTop: 3,
        marginBottom: 2,
    },
    success: {
        color: 'success.main',
    },
    spacingDown: {
        marginBottom: '10px'
    }
};

function PasswordUpdate() {

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

    const alert = useSelector(state => state.alertReducer);
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
            <Box sx={styles.boxStyle}>
                {alertMessageObject && alertMessageObject.success &&
                <Alert severity={alert.type}>{alertMessageObject.success}</Alert>
                }
                <Avatar sx={styles.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" sx={styles.spacingDown}>
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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
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
                        sx={styles.submit}
                    >
                        Update Password
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}


export default PasswordUpdate;