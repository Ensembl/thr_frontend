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
import {useDispatch, useSelector} from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import {userActions} from '../../redux/actions';
import FormHelperText from "@mui/material/FormHelperText";
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
        float: "right"
    },
};

function ForgotPassword() {

    const [email, setEmail] = useState({email: ''});
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const alert = useSelector(state => state.alertReducer);
    let alertMessageObject = Object.keys(alert).length > 0 ? JSON.parse(alert.message) : {}

    function handleChange(e) {
        const email = e.target.value;
        setEmail({email: email});
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email) {
            dispatch(userActions.forgotPassword(email))
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
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot/Reset Password
                </Typography>
                {alertMessageObject && alertMessageObject.non_field_errors &&
                <Alert severity={alert.type}>{alertMessageObject.non_field_errors[0]}</Alert>
                }
                <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <FormHelperText>Please enter the email you used to create your account</FormHelperText>
                    {submitted && !email &&
                    <Alert severity="error">Email is required</Alert>
                    }
                    {alertMessageObject.email &&
                    <Alert severity={alert.type}>{alertMessageObject.email[0]}</Alert>
                    }
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={styles.submit}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ForgotPassword;