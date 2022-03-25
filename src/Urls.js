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

import React from "react";
import {Route, Switch, Redirect, Router} from "react-router-dom";
import Login from "./components/authentication/Login";
import Home from "./components/home/Home";
import PasswordUpdate from "./components/authentication/PasswordUpdate";
import UserDashboard from "./components/dashboard/UserDashboard";
import SearchResult from "./components/trackhub_search/SearchResult";
import MainView from "./components/trackhub_view/MainView";
import NotFound from "./components/generic/NotFound";
import {history} from "./redux/helpers";
import SearchBasicDocs from "./components/docs/search/SearchBasicDocs";
import SearchResultsDocs from "./components/docs/search/SearchResultsDocs";
import SearchAdvancedDocs from "./components/docs/search/SearchAdvancedDocs";
import OverviewDocs from "./components/docs/management/OverviewDocs";
import AssemblySupportDocs from "./components/docs/management/AssemblySupportDocs";
import ModellingDocs from "./components/docs/management/ModellingDocs";
import DashboardDocs from "./components/docs/management/DashboardDocs";
import InfoApisDocs from "./components/docs/apis/InfoApisDocs";
import ThrApisDocs from "./components/docs/apis/ThrApisDocs";
import RegistrationApiDocs from "./components/docs/apis/RegistrationApiDocs";
import LoginWfDocs from "./components/docs/apis/workflow/LoginWfDocs";
import RegisteringThWfDocs from "./components/docs/apis/workflow/RegisteringThWfDocs";
import RetrieveThWfDocs from "./components/docs/apis/workflow/RetrieveThWfDocs";
import UpdateThWfDocs from "./components/docs/apis/workflow/UpdateThWfDocs";
import DeleteThWfDocs from "./components/docs/apis/workflow/DeleteThWfDocs";
import LogoutWfDocs from "./components/docs/apis/workflow/LogoutWfDocs";
import RefApiDocs from "./components/docs/apis/RefApiDocs";
import SearchApiDocs from "./components/docs/apis/SearchApiDocs";
import About from "./components/About";
import Help from "./components/Help";
import Register from "./components/authentication/Register";
import VerifyEmail from "./components/authentication/VerifyEmail";
import ForgotPassword from "./components/authentication/ForgotPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import BiodallianceView from "./components/trackhub_view/BiodallianceView";


function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // logged in so return component
            return <Component {...props} />
        }} />
    );
}


function Urls() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/help" component={Help}/>
                {/************ Documentation ************/}
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
                {/************ User & Dashboard ************/}
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/email_verification" component={VerifyEmail}/>
                <Route exact path="/forgot_password" component={ForgotPassword}/>
                <Route exact path="/reset_password" component={ResetPassword}/>
                <PrivateRoute exact path="/update_password" component={PasswordUpdate}/>
                <PrivateRoute exact path="/user" component={UserDashboard}/>
                {/************ Search & View Track hubs ************/}
                <Route exact path="/search" component={SearchResult}/>
                {/* more details here: https://stackoverflow.com/a/53694210/4488332
                    and here: https://blog.pshrmn.com/simple-react-router-v4-tutorial/ */}
                <Route path="/trackhub_view/:id" component={MainView}/>
                <Route path="/biodalliance/view" component={BiodallianceView}></Route>
                {/************ Not Found ************/}
                <Route path="/404" component={NotFound}/>
                <Redirect from="*" to="/404"/>
            </Switch>
        </Router>
    )
};

export default Urls;