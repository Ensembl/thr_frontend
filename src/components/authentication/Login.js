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
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import {userActions} from '../../redux/actions';
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
    signup: {
        textAlign: "right"
    },
};


function Login() {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const {username, password} = inputs;
    const loggingIn = useSelector(state => state.authenticationReducer.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    const alert = useSelector(state => state.alertReducer);
    let alertMessageObject = Object.keys(alert).length > 0 ? JSON.parse(alert.message) : {}

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const {from} = location.state || {from: {pathname: "/"}};
            dispatch(userActions.login(username, password, from));
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
                <Typography component="h1" variant="h5" sx={{mb: 1}}>
                    Login
                </Typography>
                {alertMessageObject && alertMessageObject.non_field_errors &&
                <div>
                    <br/>
                    <Alert severity={alert.type}>{alertMessageObject.non_field_errors[0]}</Alert>
                    <Alert severity="info" sx={styles.submit}>
                        You can <Link to='/forgot_password' variant="body2"> reset your password </Link>
                        If you already have an account on the previous Track Hub Registry
                    </Alert>
                </div>
                }
                <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={handleChange}
                    />
                    {submitted && !username &&
                    <Alert severity="error">Username is required</Alert>
                    }
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    {submitted && !password &&
                    <Alert severity="error">Password is required</Alert>
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={styles.submit}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to='/forgot_password' variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <div sx={styles.signup}>
                                No account yet? <Link to='/register'>Register</Link>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;