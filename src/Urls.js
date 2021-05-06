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
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/authentication/Login";
import Home from "./components/home/Home";
import PasswordUpdate from "./components/authentication/PasswordUpdate";
import Register from "./components/authentication/Register";
import UserDashboard from "./components/dashboard/UserDashboard";
import MainView from "./components/trackhub_view/MainView";
import NotFound from "./components/NotFound";


// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({isAuthenticated, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Home exact path="/"> <Home {...props} /></Home>
                    <Route exact path="/login/"> <Login {...props} /></Route>
                    <Route exact path="/register/"> <Register {...props} /></Route>
                    {/*
                    more details here: https://stackoverflow.com/a/53694210/4488332
                    and here: https://blog.pshrmn.com/simple-react-router-v4-tutorial/
                    */}
                    <Route path="/trackhub_view/:id" component={MainView}></Route>
                    <PrivateRoute exact path="/update_password/" isAuthenticated={props.isAuthenticated}>
                        <PasswordUpdate {...props}/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/user/" isAuthenticated={props.isAuthenticated}>
                        <UserDashboard {...props}/>
                    </PrivateRoute>
                    <Route path="/404" component={NotFound}/>
                    <Redirect to="/404"/>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;