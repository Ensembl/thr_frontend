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
// TODO: restructure the code and move router to another .js file
// eslint-disable-next-line
import Urls from './Urls';
import Layout from './components/Layout';

import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {history} from './_helpers';
import {alertActions} from './_actions';
import {PrivateRoute} from './_components';

import Home from "./components/home/Home";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ForgotPassword from "./components/authentication/ForgotPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import VerifyEmail from "./components/authentication/VerifyEmail";
import SearchResult from "./components/trackhub_search/SearchResult";
import MainView from "./components/trackhub_view/MainView";
import PasswordUpdate from "./components/authentication/PasswordUpdate";
import UserDashboard from "./components/dashboard/UserDashboard";
import NotFound from "./components/NotFound";
import About from "./About";
import Help from "./Help";
import SearchBasicDocs from "./components/docs/search/SearchBasicDocs";
import SearchResultsDocs from "./components/docs/search/SearchResultsDocs";
import SearchAdvancedDocs from "./components/docs/search/SearchAdvancedDocs";
import OverviewDocs from "./components/docs/management/OverviewDocs";
import AssemblySupportDocs from "./components/docs/management/AssemblySupportDocs";
import ModellingDocs from "./components/docs/management/ModellingDocs";
import DashboardDocs from "./components/docs/management/DashboardDocs";
import ThrApisDocs from "./components/docs/apis/ThrApisDocs";
import InfoApisDocs from "./components/docs/apis/InfoApisDocs";
import RegistrationApiDocs from "./components/docs/apis/RegistrationApiDocs";
import LoginWfDocs from "./components/docs/apis/workflow/LoginWfDocs";
import RegisteringThWfDocs from "./components/docs/apis/workflow/RegisteringThWfDocs";
import RetrieveThWfDocs from "./components/docs/apis/workflow/RetrieveThWfDocs";
import UpdateThWfDocs from "./components/docs/apis/workflow/UpdateThWfDocs";
import DeleteThWfDocs from "./components/docs/apis/workflow/DeleteThWfDocs";
import LogoutWfDocs from "./components/docs/apis/workflow/LogoutWfDocs";
import RefApiDocs from "./components/docs/apis/RefApiDocs";
import SearchApiDocs from "./components/docs/apis/SearchApiDocs";
import BiodallianceView from "./components/trackhub_view/BiodallianceView";

import './static/css/style.css';

import {ThemeProvider} from '@material-ui/styles';
// Fix findDOMNode is deprecated in StrictMode: https://stackoverflow.com/q/61220424/4488332
// import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import CookiesBanner from "./components/CookiesBanner";

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

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Layout {...props}>
                    {/* TODO: move the routing to a separate file*/}
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/docs/search" component={SearchBasicDocs}/>
                            <Route exact path="/docs/search/results" component={SearchResultsDocs}/>
                            <Route exact path="/docs/search/advanced" component={SearchAdvancedDocs}/>
                            <Route exact path="/docs/management/overview" component={OverviewDocs}/>
                            <Route exact path="/docs/management/assembly_support" component={AssemblySupportDocs}/>
                            <Route exact path="/docs/management/modelling" component={ModellingDocs}/>
                            <Route exact path="/docs/management/dashboard" component={DashboardDocs}/>
                            <Route exact path="/docs/api/info" component={InfoApisDocs}/>
                            <Route exact path="/docs/apis" component={ThrApisDocs}/>
                            <Route exact path="/docs/api/registration" component={RegistrationApiDocs}/>
                            <Route exact path="/docs/api/registration/workflow/login" component={LoginWfDocs}/>
                            <Route exact path="/docs/api/registration/workflow/thregister" component={RegisteringThWfDocs}/>
                            <Route exact path="/docs/api/registration/workflow/thlist" component={RetrieveThWfDocs}/>
                            <Route exact path="/docs/api/registration/workflow/thupdate" component={UpdateThWfDocs}/>
                            <Route exact path="/docs/api/registration/workflow/thdelete" component={DeleteThWfDocs}/>
                            <Route exact path="/docs/api/registration/workflow/logout" component={LogoutWfDocs}/>
                            <Route exact path="/docs/api/registration/reference" component={RefApiDocs}/>
                            <Route exact path="/docs/api/search" component={SearchApiDocs}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/help" component={Help}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/search" component={SearchResult}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/email_verification" component={VerifyEmail}/>
                            <Route exact path="/forgot_password" component={ForgotPassword}/>
                            <Route exact path="/reset_password" component={ResetPassword}/>
                            {/*
                                more details here: https://stackoverflow.com/a/53694210/4488332
                                and here: https://blog.pshrmn.com/simple-react-router-v4-tutorial/
                            */}
                            <Route path="/trackhub_view/:id" component={MainView}/>
                            <Route path="/biodalliance/view" component={BiodallianceView}></Route>
                            <PrivateRoute exact path="/update_password" component={PasswordUpdate}/>
                            <PrivateRoute exact path="/user" component={UserDashboard}/>
                            <Route path="/404" component={NotFound}/>
                            <Redirect from="*" to="/404"/>
                        </Switch>
                    </Router>

                </Layout>
            </div>
            <CookiesBanner/>
        </ThemeProvider>
    );
}

export default App;