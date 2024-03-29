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

import React, {useEffect} from 'react';
// eslint-disable-next-line
import Urls from './Urls';
import Layout from './components/Layout';
import {useDispatch} from 'react-redux';
import {history} from './redux/helpers';
import {alertActions} from './redux/actions';

import './static/css/style.css';

// import { ThemeProvider, StyledEngineProvider } from '@mui/styles';
// Had to manually edit this one to fix:
// Attempted import error: 'StyledEngineProvider' is not exported from '@mui/styles
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme, adaptV4Theme } from '@mui/material/styles';
import CookiesBanner from "./components/generic/CookiesBanner";

// The main colours and fonts used in the application
const theme = createTheme(adaptV4Theme({
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
        button: {
            textTransform: 'none'
        }
    },
}));

function App(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Layout {...props}>
                        <Urls/>
                    </Layout>
                </div>
                <CookiesBanner/>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;