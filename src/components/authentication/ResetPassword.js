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


import React, {useState, useEffect} from 'react';
import queryString from 'query-string';

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

/**
 * The reset password displays a form for resetting an account password when it receives
 * a valid password reset token in the url querystring parameters.
 * The token is validated when the component mounts by calling userActions.validateResetToken(token)
 * from inside a useEffect() react hook function, the empty dependency array passed to the react hook
 * makes it run only once when the component mounts.
 */
function ResetPassword() {

    const dispatch = useDispatch();
    const location = useLocation();

    // get the uidb64 and token from URL
    const {uidb64, token} = queryString.parse(location.search);

    const [inputs, setInputs] = useState({
        new_password: '',
        new_password_confirm: '',
        uidb64: uidb64,
        token: token
    });
    const [submitted, setSubmitted] = useState(false);
    const {new_password, new_password_confirm} = inputs;

    const alert = useSelector(state => state.alertReducer);
    let alertMessageObject = Object.keys(alert).length > 0 ? JSON.parse(alert.message) : {}

    useEffect(() => {
        // get the uidb64 and token from URL
        const {uidb64, token} = queryString.parse(location.search);

        dispatch(userActions.validateResetToken(uidb64, token));
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (new_password && new_password_confirm && new_password === new_password_confirm) {
            dispatch(userActions.resetPassword(new_password, new_password_confirm, uidb64, token))
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box sx={styles.boxStyle}>
                {alertMessageObject && alertMessageObject.success &&
                <Alert severity={alert.type}>{alertMessageObject.success}</Alert>
                }
                {alertMessageObject && alertMessageObject.error &&
                <Alert severity={alert.type}>{alertMessageObject.error}</Alert>
                }
                <Avatar sx={styles.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" sx={styles.spacingDown}>
                    Reset Password
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
                        name="new_password"
                        label="New Password"
                        type="password"
                        id="new_password"
                        onChange={handleChange}
                    />
                    {alertMessageObject.new_password &&
                    <Alert severity={alert.type}>{alertMessageObject.new_password[0]}</Alert>
                    }
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="new_password_confirm"
                        label="New Password (Confirmation)"
                        type="password"
                        id="new_password_confirm"
                        onChange={handleChange}
                        error={new_password !== new_password_confirm}
                        helperText={new_password !== new_password_confirm ? "Passwords don't match" : null}
                    />
                    {alertMessageObject.new_password_confirm &&
                    <Alert severity={alert.type}>{alertMessageObject.new_password_confirm[0]}</Alert>
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={styles.submit}
                    >
                        Reset Password
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}


export default ResetPassword;