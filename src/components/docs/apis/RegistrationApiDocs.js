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
import {TableCell, TableHead, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MainBreadcrumb from "../../MainBreadcrumb";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import ApisDocsMenu from "./ApisDocsMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    item: {
        listStyleType: 'none',
    },
    table: {
        minWidth: 650,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const ThrApisDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ApisDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="API"/>
                    <br/>
                    <Typography id="top" component="h1" variant="h4">
                        Registration API
                    </Typography>

                    <br/>
                    <Typography id="authentication" component="h4" variant="h5">
                        Authentication
                    </Typography>
                    <p>
                        The Registry requires requests to the Registration API to be authenticated. The Registration API
                        implements Basic HTTP Authentication, as defined by RFC 2617, which enables a client to
                        authenticate individual HTTP requests by including an authentication header in the request. In
                        order to make authorized calls to the API, your application must first obtain an access token,
                        and use that token in the authentication header of all subsequent requests.
                    </p>

                    <Typography id="workflow" component="h4" variant="h5">
                        A Simplified RESTful workflow
                    </Typography>
                    <p>
                        API clients and the Registry communicates over HTTPS, exchanging JSON representations of API
                        objects.
                    </p>
                    <p>
                        This simplified example of a RESTful workflow includes requests to register remote track hubs,
                        list registered track data hubs with the Registry and update a registered track hub.
                    </p>
                    <p>
                        These examples assume the track hub data provider using the API has signed up and created an
                        account with the Registry. To create an account, go to <a
                        href="/register" target="_blank">registration</a>.
                    </p>

                    <Typography id="login" component="h4" variant="h6">
                        <a href="/docs/api/registration/workflow/login">Logging in</a>
                    </Typography>
                    <p>
                        All requests to the service must be authenticated. The first step in any Registration API
                        RESTful workflow is to obtain an authentication token.
                    </p>

                    <Typography id="" component="h4" variant="h6">
                        <a href="/docs/api/registration/workflow/thregister">Registering track hubs</a>
                    </Typography>
                    <p>
                        You've just signed up and you've got some remote public track hubs that you want to register
                        with and make available for search on the Track Hub Registry.
                    </p>

                    <Typography id="" component="h4" variant="h6">
                        <a href="/docs/api/registration/workflow/thlist">Retrieve the list of registered track hubs</a>
                    </Typography>
                    <p>
                        You've submitted some of your public track hubs to the Registry. You want to know which ones by
                        retrieving the list of registered track hubs from the Registry.
                    </p>

                    <Typography id="" component="h4" variant="h6">
                        <a href="/docs/api/registration/workflow/thupdate">Update registered track hubs</a>
                    </Typography>
                    <p>
                        You've updated the structure or content of one of your remote public hubs registered with us.
                        You obviously want the changes to appear on the Registry as well.
                    </p>

                    <Typography id="" component="h4" variant="h6">
                        <a href="/docs/api/registration/workflow/thdelete">Delete registered track hubs</a>
                    </Typography>
                    <p>
                        One of your remote public hubs does not exist any more. Or you simply don't want to make it
                        available for search in the Track Hub Registry.
                    </p>

                    <Typography id="logout" component="h4" variant="h6">
                        <a href="/docs/api/registration/workflow/logout">Log out</a>
                    </Typography>
                    <p>
                        This terminates the client session and ends any possible workflow of interaction between the
                        client and the Registration API.
                    </p>
                </main>
            </div>
        </>
    );
};


export default ThrApisDocs;