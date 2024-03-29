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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../redux/actions';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";


const styles = {
    boxStyle: {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 1,
        backgroundColor: 'secondary.main',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 3,
        maxWidth: '800px'
    },
    submit: {
        marginTop: 3,
        marginBottom: 2,
    },
    signin: {
        textAlign: "center"
    },
};

export default function Register() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        firstname: '',
        lastname: '',
        affiliation: '',
        agreement: false,
        check_interval: 'automatic',
        continuous_alert: false,
    });
    const password = user.password;
    const password2 = user.password2;

    const [submitted, setSubmitted] = useState(false);
    // eslint-disable-next-line
    const registering = useSelector(state => state.registrationReducer.registering);
    const dispatch = useDispatch();

    const alert = useSelector(state => state.alertReducer);

    let alertMessageObject = Object.keys(alert).length > 0 ? JSON.parse(alert.message) : {}

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.username && user.email && user.password && user.password2 && user.agreement) {
            dispatch(userActions.register(user));
        }
    }

    const registrationMessageInfo = 'You need to have an account before submitting data. Sign up and start using the ' +
        'REST API to manage your track hubs with the registry.\n\n' +
        'If you do have an account, use the REST API to authenticate and submit/update your track collections.'

    const privacyText = 'You agree that we can retain the information entered in this form and use it as necessary' +
        ' to provide the Trackhub Registry service in accordance with GDPR regulations.'

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <Box sx={styles.boxStyle}>
                <Avatar sx={styles.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register as Track Hub Provider
                </Typography>
                <Alert severity="info" sx={styles.submit}>
                    {registrationMessageInfo}
                </Alert>
                <div sx={styles.signin}>
                    Already Have an Account? <Link to='/login'>Login</Link>
                </div>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.form}>
                    <h2>Authentication & Contact</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                onChange={handleChange}
                                value={user.username || ''}
                            />
                            <FormHelperText>Username for authenticating with the REST API and the web interface. It
                                cannot
                                be changed.</FormHelperText>
                            {submitted && !user.username &&
                            <Alert severity="error">Username is required</Alert>
                            }
                            {alertMessageObject.username &&
                            <Alert severity={alert.type}>{alertMessageObject.username[0]}</Alert>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                onChange={handleChange}
                                value={user.email || ''}
                            />
                            <FormHelperText>A valid email account the Registry can communicate with.</FormHelperText>
                            {submitted && !user.email &&
                            <Alert severity="error">Email is required</Alert>
                            }
                            {alertMessageObject.email &&
                            <Alert severity={alert.type}>{alertMessageObject.email[0]}</Alert>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="password"
                                name="password"
                                margin="normal"
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                onChange={handleChange}
                                value={user.password || ''}
                                error={password !== password2}
                                helperText={password !== password2 ? "Passwords don't match" : null}
                            />
                            <FormHelperText>Password for authenticating with the REST API and the web interface. No
                                special
                                constraints, use something robust enough.</FormHelperText>
                            {submitted && !user.password &&
                            <Alert severity="error">Password is required</Alert>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="password2"
                                name="password2"
                                label="Confirm the password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                required
                                onChange={handleChange}
                                value={user.password2 || ''}
                                error={password !== password2}
                                helperText={password !== password2 ? "Passwords don't match" : null}
                            />
                            <FormHelperText>Confirm the password.</FormHelperText>
                            {submitted && !user.password2 &&
                            <Alert severity="error">Password confirmation is required</Alert>
                            }
                            {alertMessageObject.password &&
                            <Alert severity={alert.type}>{alertMessageObject.password}</Alert>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstname"
                                name="firstname"
                                label="First Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={handleChange}
                                value={user.firstname || ''}
                            />
                            <FormHelperText>Track hub author's first name, optional.</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastname"
                                name="lastname"
                                label="Last Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={handleChange}
                                value={user.lastname || ''}
                            />
                            <FormHelperText>Track hub author's last name, optional.</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="affiliation"
                                name="affiliation"
                                label="Affiliation"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={handleChange}
                                value={user.affiliation || ''}
                            />
                            <FormHelperText>Track hub author's affiliation, optional.</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Checkbox
                                id="agreement"
                                name="agreement"
                                inputProps={{'aria-label': 'primary checkbox'}}
                                color={"primary"}
                                onChange={e => {
                                    setUser(user => ({...user, agreement: e.target.checked}))
                                    // console.log('user.agreement --> ', user.agreement)
                                }}
                                checked={user.agreement}
                            /> Accept privacy policy *
                            <Tooltip title={privacyText} placement={"top"}>
                                <InfoIcon fontSize={"small"} color={"primary"} y={100}/>
                            </Tooltip>
                            <FormHelperText>{privacyText}</FormHelperText>
                            {submitted && !user.agreement &&
                            <Alert severity="warning">You need to agree to the terms before signing up</Alert>
                            }
                        </Grid>
                        <br/>
                    </Grid>

                    <h2>Track hub monitoring configuration</h2>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="check-interval-label">Check Interval</InputLabel>
                                <NativeSelect
                                    id="check_interval"
                                    name="check_interval"
                                    value={user.checkInterval || 'automatic'}
                                    onChange={handleChange}
                                >
                                    <option value={'automatic'}>Automatic</option>
                                    <option value={'weekly'}>Weekly</option>
                                    <option value={'monthly'}>Monthly</option>
                                </NativeSelect>
                            </FormControl>
                            <FormHelperText>The frequency with which the Registry checks the availability of your remote
                                track data files.</FormHelperText>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Checkbox
                                id="continuous_alert"
                                name="continuous_alert"
                                onChange={e => {
                                    setUser(user => ({...user, continuous_alert: e.target.checked}))
                                    // console.log('user.continuous_alert --> ', user.continuous_alert)
                                }}
                                checked={user.continuous_alert}
                                inputProps={{'aria-label': 'primary checkbox'}}
                            /> Receive continuous alerts
                            <FormHelperText>Tick this if you want to receive an alert in case of problems each time the
                                Registry inspect your track data files.</FormHelperText>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={styles.submit}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
