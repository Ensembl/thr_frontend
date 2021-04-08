import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/authentication/Login";
import Home from "./components/home/Home";
import PasswordUpdate from "./components/authentication/PasswordUpdate";
import Register from "./components/authentication/Register";
import UserDashboard from "./components/dashboard/UserDashboard";


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
                    <PrivateRoute exact path="/update_password/" isAuthenticated={props.isAuthenticated}>
                        <PasswordUpdate {...props}/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/user/" isAuthenticated={props.isAuthenticated}>
                        <UserDashboard {...props}/>
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;