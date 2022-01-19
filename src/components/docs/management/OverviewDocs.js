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
import ManagementDocsMenu from "./ManagementDocsMenu";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import MainBreadcrumb from "../../MainBreadcrumb";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    item: {
        listStyleType: 'none',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const OverviewDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ManagementDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Track Hub Management"/>
                    <br/>
                    <Typography component="h1" variant="h4">
                        Managing Track Hubs with the Registry - An Overview
                    </Typography>

                    <Alert severity="info" className={classes.submit}>
                        This section of the documentation is for track hub creators who want to register their
                        data hubs with the Registry. Go to <a href="/docs/search">search documentation</a> if you only
                        intend to explore interesting data hubs.
                    </Alert>

                    <Typography id="registration" component="h4" variant="h5">
                        Client Registration
                    </Typography>
                    <p>
                        You must have an account with the registry before submitting and managing any data. To
                        create an account, go to the <a href="/register" target="_blank">registration
                        page</a>.
                    </p>

                    <p>
                        The client registration interface captures basic contact information (i.e. first/last name,
                        institute, email) of the person responsible of managing the track data hubs with the
                        registry, together with credentials necessary to use the REST API to register and update
                        track data hubs with the registry, and to sign in and access the registry web dashboard. The
                        interface also asks to configure some options that control <a
                        href="/docs/management/dashboard#monitoring">automatic track hub
                        monitoring</a> by the registry.
                    </p>

                    <p>
                        Upon registration, you're immediately logged in into the system and presented the <a
                        href="/docs/management/dashboard">dashboard</a>.
                    </p>

                    <Typography id="management" component="h4" variant="h5">
                        Track Hub Management
                    </Typography>
                    <p>
                        Once you <a href="/register" target="_blank">Sign Up</a>, you can
                        start using the <a href="'/docs/api/registration">Registration API</a>,
                        which allows you to use <a href="/docs/api/registration#workflow">RESTful
                        workflows</a> to manage your track data hubs with the Registry.
                    </p>

                    <p>
                        Using this API, you can:
                        <ul>
                            <li><a href="/docs/api/registration/workflow/thregister">Register
                                track data hubs</a> with the registry;
                            </li>
                            <li><a href="/docs/api/registration/workflow/thlist">List</a> the all
                                your registered track hubs or data bases;
                            </li>
                            <li><a
                                href="/docs/api/registration/reference">Get/Update/Delete</a> a
                                given track hub in the registry
                            </li>
                        </ul>
                    </p>

                    <p>
                        Alternatively, you can use the <a
                        href="/docs/management/dashboard">dashboard</a> on the registry web
                        interface to query the status of your registered track hubs, or view and delete them from
                        the registry.
                    </p>

                    <Typography id="submission" component="h4" variant="h5">
                        The Submission Process
                    </Typography>
                    <p>
                        The figure below highlights the main steps involved when submitting a track data hub to the
                        Registry.
                    </p>

                    <img src={require("../../../static/img/submission.png").default}/>

                    <p>
                        The process begins with your client authenticating itself and submitting the URL of a
                        remote, publicly accessible track hub using one of the Registry <a
                        href="/docs/api/registration">REST APIs</a>.
                    </p>
                    <p>
                        The server then runs the <a target="_blank"
                                                    href="https://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Debug">hubCheck</a> program
                        from UCSC to check that the files in the hub are correctly formatted. It is indeed a good
                        idea to test your hub with this program before submitting it in order to avoid an
                        unnecessary rejection.
                    </p>
                    <p>
                        If the hub passes the validation above, it is parsed into its various components, mainly the
                        various assembly names and the corresponding data configuration and directories. In order to
                        correctly identify each assembly, the Registry tries to map their names (as declared in the
                        genomes.txt file) to valid INSDC accession numbers. See <a
                        href="/docs/management/assembly_support">Genome Assembly Support</a> for
                        a discussion about the motivation and details of this approach.
                    </p>
                    <p>
                        If all genomes are mapped, the different genome assembly database configuration files (i.e.
                        trackDb.txt) are converted each one into a separate JSON document. This is an important
                        aspect of the whole submission process. The Registry does not store a representation of a
                        track hub as a whole; a track hub is implicitly represented by its set of trackDbs which
                        store configuration/visualisation options for the different assemblies managed by the hub.
                        See <a href="/docs/management/modelling">Modelling Track Hubs</a> for
                        more information about the design principles.
                    </p>
                    <p>
                        Each one of these trackDB JSON documents is validated against a <a
                        href="/docs/management/modelling#schema">schema</a> describing the
                        structure and content of valid trackDb JSON documents. If validation succeeds for all of
                        them, the documents are finally stored in the Registry and are immediately available for
                        search.
                    </p>
                </main>
            </div>
        </>
    );
};


export default OverviewDocs;