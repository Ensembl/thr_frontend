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
import {Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import MainBreadcrumb from "../../../generic/MainBreadcrumb";
import ApisDocsMenu from "../ApisDocsMenu";
import CssBaseline from "@mui/material/CssBaseline";
import {Alert} from "@mui/lab";

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
    codeBlock: {
        display: 'block',
        borderRadius: '5px',
        padding: '10px',
        background: '#eeeeee',
        overflowX: 'scroll',
        minWidth: '100px',
    }
}));

const UpdateThWfDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ApisDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Registration"/>
                    <br/>
                    <Typography id="top" component="h1" variant="h4">
                        A Simplified RESTful workflow
                    </Typography>

                    <br/>
                    <Typography id="thupdate" component="h4" variant="h5">
                        Updating Track Hubs
                    </Typography>
                    <br/>
                    <Alert severity="warning">
                        This feature is not implemented yet, if you want to update one of your hubs, please delete
                        the old one using the <a href="/docs/management/dashboard">dashboard</a> or <a
                        href="/docs/api/registration/workflow/thdelete">DELETE API</a> and <a
                        href="/docs/api/registration/workflow/thregister">submit</a> the newer version
                        again.
                    </Alert>
                    <p>
                        Suppose you've updated the structure or content of one of your remote public hubs registered
                        with us. You obviously want the changes to appear on the Registry as well.
                    </p>
                    <p>
                        The procedure is simple and has been already explored in <a
                        href="/docs/api/registration/workflow/thregister">Registering Track Hubs</a>:
                        simply POST the hub URL at <a
                        href="/docs/api/registration/reference#post_trackhub">/api/trackhub</a> again. In
                        case the track hub has already been submitted, the request is interpreted as a request to update
                        the details of the registered track hub. The Registry will delete the existing stored trackDb
                        entities and replace them with the most up-to-date versions obtained by parsing the hub again.
                    </p>

                    <Typography component="h4" variant="h6">
                        Prerequisites
                    </Typography>
                    <p>
                        Verify that:
                        <ul>
                            <li>Your client has successfully <a
                                href="/docs/api/registration/workflow/login">logged in</a> and have, as
                                such, obtained a valid authentication token.
                            </li>
                        </ul>
                    </p>

                    <Typography component="h4" variant="h6">
                        Procedure
                    </Typography>
                    <ol>
                        <li>Make a POST request to the <a
                            href="/docs/api/registration/reference#post_trackhub">/api/trackhub</a> endpoint
                            that includes a <em>User</em> header with your username and
                            an <em>Auth-Token</em> header with the given authentication token;
                        </li>
                        <li>Examine the response. The response code indicates whether the request succeeded, or how it
                            failed;
                        </li>
                        <li>A successful request returns an array of JSON objects, where each object is a translation of
                            the configuration of a trackDb belonging to the track hub.
                        </li>
                    </ol>

                    <Typography component="h4" variant="h6">
                        Example: track hub update
                    </Typography>
                    <p>
                        This example updates the registration of the <a target="_blank"
                                                                        href="http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt"
                                                                        rel="noreferrer">CSHL
                        Biology of Genomes meeting 2013 demonstration assembly hub</a>. This time we don't specify a
                        data type, hence it will default to "genomics":
                    </p>
                    <p>
                        Request:
                        <pre className={classes.codeBlock}>
                    {
                        `      POST ` + window.location.origin + `/api/trackhub
      User: exampleuser
      Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi
      {
        "url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt"
      }`
                    }
                </pre>
                        The response is similar to that already seen in <a
                        href="/docs/api/registration/workflow/thregister">Registering Track Hubs</a> which we
                        don't report here.
                    </p>

                    <Typography id="errors" component="h4" variant="h6">
                        What can possibly go wrong
                    </Typography>
                    <p>
                        Remember: <u>always check the response code</u> since it indicates whether the request
                        succeeded, or how it failed.
                        <ul>
                            <li>if the request is successful, the server returns HTTP response code 200 (OK)</li>
                            <li>if the credentials supplied in the authentication header are invalid, the server returns
                                HTTP response code 401
                            </li>
                            <li>if your hub is not compliant with the UCSC hub specs, the server returns HTTP response
                                code 400. The body contains the message: "hubCheck report: ..."
                            </li>
                            <li>if the hub is not available or cannot be correctly parsed, the server returns HTTP
                                response code 400. The response body message contains the error
                            </li>
                            <li>your hub genome subdirectory names must be <a target="_blank"
                                                                              href="https://genome.ucsc.edu/FAQ/FAQreleases.html#release1"
                                                                              rel="noreferrer">valid
                                UCSC DB names</a> (assembly synonyms, e.g. hg38) or you must provide a map from these
                                names to
                                their corresponding INSDC accessions (i.e. assembly accession + version, e.g. <a
                                    target="_blank"
                                    href="http://www.ncbi.nlm.nih.gov/assembly/GCF_000001405.13"
                                    rel="noreferrer">GCA_000001405.1</a>).
                                If neither of the two conditions are met, the server returns HTTP response code 400 with
                                the message "Unable to find a valid INSDC accession for genome assembly [..]"
                            </li>
                            <li>if one of the hub trackDb configurations cannot be translated to <a
                                href="/docs/api/modelling">valid JSON</a>, the server returns HTTP response
                                code 400. The body contains the message "Failed: ..." with an output describing the
                                reasons why validation failed
                            </li>
                            <li>if the Registry encountered an unexpected condition which prevented it from fulfilling
                                the request, it returns HTTP response code 500
                            </li>
                            <li>if the Registry is currently unable to handle the request due to a temporary overloading
                                or maintenance, it returns HTTP response code 503
                            </li>
                        </ul>
                    </p>

                    <Typography component="h4" variant="h6">
                        Example clients
                    </Typography>

                    <p>
                        As already explained, the procedure is equivalent to the registration of a track hub for the
                        first time.
                        You can refer to the workflow section <a
                        href="/docs/api/registration/workflow/thregister">Registering Track Hubs</a> for
                        examples clients in different programming languages.
                    </p>

                </main>
            </div>
        </>
    );
};


export default UpdateThWfDocs;