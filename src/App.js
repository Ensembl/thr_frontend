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
import Urls from './Urls';
import Layout from './components/Layout';
import {connect} from 'react-redux';
import * as actions from './store/authActions';

import './static/css/style.css';

import {ThemeProvider} from '@material-ui/styles';
// Fix findDOMNode is deprecated in StrictMode: https://stackoverflow.com/q/61220424/4488332
// import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';

// The main colours and fonts used in the application
const theme = createMuiTheme({
    palette: {
        default: {
            main: '#e7e7e7',
        },
        primary: {
            main: '#008cba',
        },
        secondary: {
            main: '#e99002',
        },
        success: {
            main: '#43ac6a',
        },
        error: {
            main: '#f04125',
        },
        info: {
            main: '#5bc0de',
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif',
        ].join(','),
    },
});

function App(props) {

    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
        props.setAuthenticatedIfRequired();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Layout {...props}>
                    <Urls {...props}/>
                </Layout>
            </div>
        </ThemeProvider>
    );
}

//This means that one or more of the redux states in the store are available as props
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null && typeof state.auth.token !== 'undefined',
        token: state.auth.token
    }
}

//This means that one or more of the redux actions in the form of dispatch(action) combinations are available as props
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);