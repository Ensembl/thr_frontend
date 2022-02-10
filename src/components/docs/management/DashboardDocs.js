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
import Grid from "@material-ui/core/Grid";
import ManagementDocsMenu from "./ManagementDocsMenu";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import MainBreadcrumb from "../../MainBreadcrumb";
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
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const DashboardDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ManagementDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Track Hub Management"/>
                    <Typography component="h1" variant="h4">
                        Managing Track Hubs with the Registry - The Dashboard
                    </Typography>

                    <p>
                        When you register, you're immediately logged in into the system and presented the so called
                        dashboard, a web interface which allows to explore and edit the track data hubs that you
                        submit to the Registry. The interface is divided into three tabbed panels: <a
                        href="#profile">"Profile"</a>, <a href="#status">"My track collections"</a> and
                        "Submit/Update". The last one is intended to support track hub submission from the web. This
                        functionality is not yet available, but will be in the near future. At the moment, the panel
                        contains a reminder of the possibility of using the REST API.
                    </p>

                    <Typography id="status" component="h4" variant="h5">
                        Viewing and Editing Track Hubs
                    </Typography>

                    <p>
                        When you login into the registry using the web interface, the default panel which is shown
                        is named "My track collections". It provides a quick overview of the data hubs you've
                        submitted to the Track Hub registry. An imaginary example is shown below:
                    </p>

                    <img src={require("../../../static/img/dashboard_collection.png").default}/>

                    <p>
                        Each line refers to track database settings for a given assembly in a given hub submitted to
                        the Registry. <em>Id</em> is the ID of the corresponding JSON document as stored in the
                        Registry; <em>Hub</em> and <em>Assembly</em> are respectively the name of the Hub and the
                        assembly the database refers to; <em>Created/Updated</em> are the dates at which the hub was
                        submitted to/updated in the Registry; <em>Status</em> shows a label about the status of the
                        track database as know to the Registry, which can be:
                    </p>
                    <ul>
                        <li>"Unknown": the Registry has not yet checked the status of the hub and the tracks in
                            the database;
                        </li>
                        <li>"All is well": hub and all track data files as available;</li>
                        <li>"Remote data unavailable": some or all of the remote track data is unavailable.</li>
                    </ul>
                    The last two come with the date at which the check was performed. The last column presents
                    buttons for doing some actions depending on the status of the track database. When status
                    reports "Remote data unavailable", you can click on the spyglass icon to access information
                    about the reasons, like in the following:


                    <img src={require("../../../static/img/dashboard_status.png").default}/>

                    <p>
                        The report will show a summary of the track database, with the hub name, species and
                        assembly, the total number of tracks in the database and the number of them linked to remote
                        data. For these, the report at the bottom presents a list with the name of the track, the
                        URL of the remote binary indexed data file and the reason why it cannot be accessed.
                    </p>

                    <p>
                        Independently of the status, there's an icon showing a trash bin which can be clicked to
                        delete the corresponding track database from the Registry. As discussed in <a
                        href="/docs/management/modelling">Modelling Track Hubs</a>, a track data
                        hub is implicitly represented by the set of trackDb documents which refer to it. Similarly
                        to the <a href="/docs/api/registration/workflow/thdelete">REST API</a>, <u>in order to
                        completely remove a track hub from the Registry, it is necessary to delete all track
                        databases belonging to the same hub</u>.
                    </p>

                    <Typography id="profile" component="h4" variant="h5">
                        Updating Your Profile
                    </Typography>

                    <p>
                        Click on the "Profile" tab label to access a page where you can view/update the details of
                        your account profile.
                    </p>

                    <img src={require("../../../static/img/dashboard_profile.png").default}/>

                    <p>
                        You cannot change your username, but you can edit your first/last name and affiliation
                        (optional), the email used for communication from the Registry and the password to
                        authenticate with the website and the REST API.
                    </p>

                    <Typography id="monitoring" component="h4" variant="h5">
                        Automatic Track Hub Monitoring
                    </Typography>

                    <p>
                        You may have noticed a section "Track Hub monitoring configuration" when you signed up in
                        the registration form. The same appears in the profile update form. The Registry performs
                        periodic checks on the status of the tracks data files referred to in the submitted track
                        hubs and, based on these, it updates the status of the corresponding track databases
                        appearing on the <a href="/docs/search/results#status">search result
                        page</a> and on the <a href="#status">track collection tab</a> in the dashboard.
                    </p>
                    <p>
                        You can control two parameters related to these periodic inspections:
                    </p>
                    <ul>
                        <li><em>Check interval</em>: tells the Registry the frequency with which to perfom the
                            check. If set to <em>Automatic</em> the decision is left to the Registry;
                        </li>
                        <li><em>Receive continuos alerts</em>: if the checkbox is not ticked, you receive an
                            alert message about some faulty tracks only once.
                        </li>
                    </ul>
                    <p>
                        As stated before, the Registry sends an alert message to the profile's email address at the
                        end of each inspection in case something wrong is found with the track data files of your
                        submitted data hubs, and unless you've ticked the checkbox above.
                    </p>
                </main>
            </div>
        </>
    );
};


export default DashboardDocs;