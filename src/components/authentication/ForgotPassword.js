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
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import {userActions} from '../../redux/actions';
import FormHelperText from "@material-ui/core/FormHelperText";

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
        float: "right"
    },
}));

function ForgotPassword() {
    const classes = useStyles();

    const [email, setEmail] = useState({email: ''});
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const alert = useSelector(state => state.alert);
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
            <div className={classes.paper}>
                {alertMessageObject && alertMessageObject.success &&
                <Alert severity={alert.type}>{alertMessageObject.success}</Alert>
                }
                {alertMessageObject && alertMessageObject.error &&
                <Alert severity={alert.type}>{alertMessageObject.error}</Alert>
                }
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot/Reset Password
                </Typography>
                {alertMessageObject && alertMessageObject.non_field_errors &&
                <Alert severity={alert.type}>{alertMessageObject.non_field_errors[0]}</Alert>
                }
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                        className={classes.submit}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default ForgotPassword;