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
import MainBreadcrumb from "../../generic/MainBreadcrumb";
import ApisDocsMenu from "./ApisDocsMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    item: {
        listStyleType: 'none',
    },
    table: {
        width: "auto"
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

const RefApiDocs = () => {
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
                    <Typography id="reg_ref_api" component="h4" variant="h5">
                        Registration API
                    </Typography>
                    <p>
                        In all the following examples, it is assumed the client has successfully logged in as
                        user <em>exampleuser</em> and password <em>examplepassword</em> and therefore obtained a valid
                        access token. This token is used in all the following endpoint examples except /api/login.
                    </p>

                    <Typography id="login" component="h4" variant="h6">
                        GET /api/login
                    </Typography>
                    <p>
                        Authenticate the client and obtain an access token in order to make subsequent requests to the
                        Registration API.
                    </p>
                    <p>
                        If the request is successful, the response is formatted as a JSON object with a single key
                        (<em>auth_token</em>), whose value is the access token. <u>This token must be included as
                        an <em>Auth-Token</em> header in all subsequent requests</u>.
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>Basic, MIME Base64</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <p>None.</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    GET https://www.trackhubregistry.org/api/login
    Authorization: Basic ZXhhbXBsZXVzZXI6ZXhhbXBsZXBhc3N3b3Jk`
                        }
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    Content-type: application/json; charset=utf-8
    ...
    {
      "auth_token":"6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi"
    }`
    }
                    </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>200</TableCell>
                                    <TableCell>OK</TableCell>
                                    <TableCell>Request successful</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>401</TableCell>
                                    <TableCell>Unauthorized</TableCell>
                                    <TableCell>The request requires user authentication</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance
                                        of the server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="get_trackhub" component="h4" variant="h6">
                        GET /api/trackhub
                    </Typography>
                    <p>
                        Returns the set of registered track data hubs for the given user.
                    </p>
                    <p>
                        If the request is successful, the response body is an array of JSON objects representing track
                        hubs registered by the user. A track hub object has the following attributes:
                        <ul>
                            <li><em>name</em>: the single-word track hub name;</li>
                            <li><em>url</em>: the track hub remote URL;</li>
                            <li><em>shortLabel</em>: the short name for the track hub;</li>
                            <li><em>longLabel</em>: the longer descriptive label for the track hub;</li>
                            <li><em>trackdbs</em>: a list of objects for each trackDb (i.e. assembly specific data
                                files) associated to the track hub. Each trackDb object contains the species NCBI tax id
                                and assembly accession, and the URI of the JSON representation of the trackDb which can
                                be retrieved from the Registry.
                            </li>
                        </ul>
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>User+Auth-Token headers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <p>None.</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    GET https://www.trackhubregistry.org/api/trackhub
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                        }

  </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    ...
    [
      {
        'trackdbs': [
                            {
                              'species': '3988',
                              'assembly': 'GCA_000151685.2',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/knB1GHPYSdmeypb-R8sxhA'
                            },
                            {
                              'species': '3711',
                              'assembly': 'GCA_000309985.1',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/JFF3OqH1QJmIJSlLfICyQg'
                            },
                            {
                              'species': '3702',
                              'assembly': 'GCA_000001735.1',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/We3M8-1RQnaUYpTspYQpCQ'
                            }
                          ],
        'shortLabel': 'Plants',
        'name': 'cshl2013',
        'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt',
        'longLabel': 'CSHL Biology of Genomes meeting 2013 demonstration assembly hub'
      },
      {
        'trackdbs': [
                            {
                              'species': '9606',
                              'assembly': 'GCA_000001405.15',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/rkaQgGf_TxW5xKElGkYQAA'
                            },
                            {
                              'species': '9606',
                              'assembly': 'GCA_000001405.1',
                              'uri': 'https://www.trackhubregistry.org/api/trackdb/-IT64jDKRXiQN_Blhjy4Uw'
                            }
                          ],
        'shortLabel': 'Ensembl Regulatory Build',
        'name': 'EnsemblRegulatoryBuild',
        'url': 'http://ngs.sanger.ac.uk/production/ensembl/regulation/hub.txt',
        'longLabel': 'Evidence summaries and provisional results for the new Ensembl Regulatory Build'
      },
    ]`
    }

  </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>200</TableCell>
                                    <TableCell>OK</TableCell>
                                    <TableCell>Request successful</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>401</TableCell>
                                    <TableCell>Unauthorized</TableCell>
                                    <TableCell>The request requires user authentication</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance
                                        of the
                                        server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="post_trackhub" component="h4" variant="h6">
                        POST /api/trackhub
                    </Typography>
                    <p>
                        Register/Update a remote public track hub with the Registry. The message body specifies the
                        track hub remote URL (can be either the directory or hub.txt file URL), a map from assembly
                        names as specified in the hub to INSDC accessions (in case of assemblies not supported by UCSC,
                        see <a href="/docs/management/assembly_support">genome assembly support</a>),
                        and, optionally, the hub assemblies data type (default: <em>genomics</em>). See <a
                        href="#post_trackhub_msg_format">Message Format</a> for a list of possible types.
                    </p>
                    <p>
                        If the track hub at the specified URL has not been previously submitted, the Registry will
                        register it by translating its trackDb files into JSON documents adhering to a particular <a
                        href="/docs/management/modelling">JSON schema version</a>. If the track hub
                        has already been submitted, the request is interpreted as a request to update the details of the
                        registered track hub (e.g. the remote track hub has been updated and you want to keep its
                        details in the Registry up to date). In this case, the Registry will delete the relevant trackDb
                        documents and replace them with translations of their most up-to-date versions.
                    </p>
                    <p>
                        If the request is successful, the response body is formatted as an array of JSON objects, where
                        each object is a translation of a trackDb document belonging to the track hub. The response
                        contains the header Location which specifies the URIs of the trackDb documents in their same
                        respective order in the response body.
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>User+Auth-Token headers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <p>
                        <ul>
                            <li><em>version</em> (optional): JSON schema version of the registered trackDb documents for
                                this hub (default: v1.0, see <a href="/docs/management/modelling">Modelling
                                    Track Hubs</a> for a discussion)
                            </li>
                        </ul>
                    </p>

                    <h4>Message</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Content-type</strong></TableCell>
                                    <TableCell>application/json</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell id="post_trackhub_msg_format"><strong>Format</strong></TableCell>
                                    <TableCell>
                                    <pre className={classes.codeBlock}>
            {
                `            {
              "type": "object",

              "properties": {
                "url":    { 
                  "description": "The hub URL (i.e. location of the hub.txt file)",
                  "type": "string", 
                  "format": "uri"
                },
                "type":  {
                  "description": "The main type of data contained in the hub",
                  "type": "string", 
                  "enum": [ "genomics", "epigenomics", "transcriptomics", "proteomics" ] 
                },
                "public": {
                  "description": "Whether the hub is available for search (1) or not (0)",
                  "type": "number"
                },
                "assemblies": {
                  "type": "object",
                  "patternProperties": {
                    "[a-zA-z][a-zA-Z0-9]+$": { "type": "string", "pattern": "^G(CA|CF)_[0-9]+.[0-9]+$" }
                  }
                }
              }

              "required": [ "url" ]
            }`
            }
                                    </pre>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Example</strong></TableCell>
                                    <TableCell>
                                    <pre className={classes.codeBlock}>
            {
                `            { 
              "url" : "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt", 
              "assemblies": {
                "araTha1": 'GCA_000001735.1',
                "ricCom1": 'GCA_000151685.2',
                "braRap1": 'GCA_000309985.1'
              }
            }`
            }
                                    </pre>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Example Request</h4>
                    <p>
                        In this example, we are requesting to register/update the CSHL Biology of Genomes meeting 2013
                        demonstration hub, which contains data for three assemblies referred to by the names "araTha1",
                        "ricCom1" and "braRap1" respectively.
                    </p>

                    <h5><strong>Important Note</strong></h5>
                    <p>
                        As can be seen in the body of the following request, we're posting the mapping between the above
                        hub assembly names and their respective INSDC accessions. This is because this is an assembly
                        hub and there's no other way for the Registry to infer species/assembly information.
                    </p>

                    <pre className={classes.codeBlock}>
    {
        `    POST https://www.trackhubregistry.org/api/trackhub
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi
    {
      "url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt",
      "assemblies": {
        "araTha1": 'GCA_000001735.1',
        "ricCom1": 'GCA_000151685.2',
        "braRap1": 'GCA_000309985.1'
      }
    }`
    }
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 201 OK
    Content-type: application/json
    Location: [ 
        'https://www.trackhubregistry.org/api/trackdb/KRBr5PS7RmapaFr7ofpTBA, 
        'https://www.trackhubregistry.org/api/trackdb/hB8Npdm1ST2gBwkbQThkVg', 
        'https://www.trackhubregistry.org/api/trackdb/FOEM87nETMOCOglmm0sSsg' 
    ]
    ...
    [
      {
        // trackDb #1 JSON object
      },
      {
        // trackDb #2 JSON object
      },
      {
        // trackDb #3 JSON object
      }
    ]`
    }
                    </pre>

                    <p>
                        The response body is an array of the three corresponding trackDb representations, with the
                        header Location reporting their respective URIs in the same order.
                    </p>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>201</TableCell>
                                    <TableCell>Created</TableCell>
                                    <TableCell>Request successful, hub trackDb entities created</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>400</TableCell>
                                    <TableCell>Bad Request</TableCell>
                                    <TableCell>
                                        Request cannot be fulfilled by the Registry. Possible reasons:
                                        <ul>
                                            <li>empty request body</li>
                                            <li>invalid JSON schema version</li>
                                            <li>request body does not specify remote hub URL</li>
                                            <li>hub is not compliant with the UCSC hub specs</li>
                                            <li>hub is not available or cannot be correctly parsed</li>
                                            <li>one of the hub trackDb configurations cannot be translated to <a
                                                href="/docs/management/modelling">valid JSON</a></li>
                                            <li>one of the hub genome subdirectory names are not <a target="_blank"
                                                                                                    href="https://genome.ucsc.edu/FAQ/FAQreleases.html#release1">valid
                                                UCSC DB names</a>, or cannot be translated to an existing NCBI assembly
                                                identifier (e.g. assembly accession + version, e.g. <a target="_blank"
                                                                                                       href="http://www.ncbi.nlm.nih.gov/assembly/GCF_000001405.13/">GCA_000001405.1</a>)
                                            </li>
                                        </ul>
                                        See <a href="/docs/api/registration/workflow/thregister#errors">What
                                        can possibly go wrong</a> for more details, in particular about the error
                                        messages.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>401</TableCell>
                                    <TableCell>Unauthorized</TableCell>
                                    <TableCell>The request requires user authentication</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance
                                        of the
                                        server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="get_trackhub_id" component="h4" variant="h6">
                        GET /api/trackhub/:id
                    </Typography>
                    <p>
                        Return a JSON representation of a track hub with the given name in the Registry.
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Type</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Example Values</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell><var>String</var></TableCell>
                                    <TableCell>A track hub name (i.e. 'hub' attribute value in hub.txt)</TableCell>
                                    <TableCell><var>cshl2013</var></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    GET https://www.trackhubregistry.org/api/trackhub/cshl2013
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                        }

                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    HTTP/1.0 200 OK
    Content-type: application/json
    ...
    {
    }`
                        }
                    </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>200</TableCell>
                                    <TableCell>OK</TableCell>
                                    <TableCell>Request successful</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>400</TableCell>
                                    <TableCell>Bad Request</TableCell>
                                    <TableCell>there are no trackDbs for the specified track hub which belong to (i.e.
                                        has been
                                        registered by) the user
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>401</TableCell>
                                    <TableCell>Unauthorized</TableCell>
                                    <TableCell>The request requires user authentication</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>404</TableCell>
                                    <TableCell>Not Found</TableCell>
                                    <TableCell>Couldn't find trackDbs for the track hub with the given name</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance
                                        of the
                                        server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="delete_trackhub_id" component="h4" variant="h6">
                        DELETE /api/trackhub/:id
                    </Typography>
                    <p>
                        Delete trackDBs assigned to a given track hub.
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>User+Auth-Token headers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Type</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Example Values</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell><var>String</var></TableCell>
                                    <TableCell>A track hub name (i.e. 'hub' attribute value in hub.txt)</TableCell>
                                    <TableCell><var>cshl2013</var></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    DELETE https://www.trackhubregistry.org/api/trackhub/cshl2013
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                        }

                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    Content-type: application/json
    { 'message': 'Deleted trackDBs from track hub cshl2013' }`
    }
                    </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>200</TableCell>
                                    <TableCell>OK</TableCell>
                                    <TableCell>Request successful</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>400</TableCell>
                                    <TableCell>Bad Request</TableCell>
                                    <TableCell>there are no trackDbs for the specified track hub which belong to (i.e.
                                        has been
                                        registered by) the user
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>401</TableCell>
                                    <TableCell>Unauthorized</TableCell>
                                    <TableCell>The request requires user authentication</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>404</TableCell>
                                    <TableCell>Not Found</TableCell>
                                    <TableCell>Couldn't find trackDbs for the track hub with the given name</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance
                                        of the
                                        server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="get_trackdb" component="h4" variant="h6">
                        GET /api/trackdb/:id
                    </Typography>
                    <p>
                        Return JSON representation of a trackDb with the given ID in the Registry.
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>User+Auth-Token headers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Type</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Example Values</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell><var>String</var></TableCell>
                                    <TableCell>A trackDb document ID</TableCell>
                                    <TableCell><var>gOGRzcTSRd2l0LMQTufS4w</var></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    GET https://www.trackhubregistry.org/api/trackdb/knB1GHPYSdmeypb-R8sxhA
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                        }

                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    Content-type: application/json
    ...
    {
          'owner': 'exampleuser',
          'created': 1440778576,
          'version': 'v1.0',
          'type': 'genomics',
          'source': {
                        'checksum': 'f9561ae6f7883add3698fad7abab7e13',
                        'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/ricCom1/trackDb.txt'
                      },
          'hub': {
                     'shortLabel': 'Plants',
                     'name': 'cshl2013',
                     'url': 'http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt',
                     'longLabel': 'CSHL Biology of Genomes meeting 2013 demonstration assembly hub'
                   },
          'species': {
                         'scientific_name': 'Ricinus communis',
                         'common_name': 'castor bean',
                         'tax_id': '3988'
                       },
          'assembly': {
                          'synonyms': 'ricCom1',
                          'name': 'JCVI_RCG_1.1',
                          'accession': 'GCA_000151685.2'
                        },

          'configuration': {
                               'repeatMasker_': {
                                                    'priority': '149.1',
                                                    'visibility': 'dense',
                                                    'compositeTrack': 'on',
          ...
    }`
    }
                    </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                <TableCell>200</TableCell>
                                <TableCell>OK</TableCell>
                                <TableCell>Request successful</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>400</TableCell>
                                <TableCell>Bad Request</TableCell>
                                <TableCell>trackDb entity does not belong to (i.e. has not been registered by) the user</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>401</TableCell>
                                <TableCell>Unauthorized</TableCell>
                                <TableCell>The request requires user authentication</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>404</TableCell>
                                <TableCell>Not Found</TableCell>
                                <TableCell>Couldn't find the trackDb entity with the given ID</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>500</TableCell>
                                <TableCell>Internal Server Error</TableCell>
                                <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>503</TableCell>
                                <TableCell>Service Unavailable</TableCell>
                                <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance of the
                                    server
                                </TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="delete_trackdb" component="h4" variant="h6">
                        DELETE /api/trackdb/:id
                    </Typography>

                    <p>
                        Delete the trackDb with the given ID from the Registry.
                    </p>
                    <p>
                        If the request is successful, the response body is a JSON object representing the deleted
                        trackDb.
                    </p>

                    <h4>Notes</h4>
                    <p>
                        Alternatively, this operation can be done more simply using the <a
                        href="/docs/dashboard#status">web interface</a>.
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>User+Auth-Token headers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Type</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Example Values</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell><var>String</var></TableCell>
                                    <TableCell>A trackDb document ID</TableCell>
                                    <TableCell><var>gOGRzcTSRd2l0LMQTufS4w</var></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    DELETE https://www.trackhubregistry.org/api/trackdb/knB1GHPYSdmeypb-R8sxhA
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                        }

                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    ...
    {
          'owner': 'exampleuser',
          'created': 1440778576,
          'version': 'v1.0',
          'type': 'epigenomics',
          ...
          ...
    }   `
    }
                    </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                <TableCell>200</TableCell>
                                <TableCell>OK</TableCell>
                                <TableCell>Request successful</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>400</TableCell>
                                <TableCell>Bad Request</TableCell>
                                <TableCell>trackDb entity does not belong to (i.e. has not been registered by) the user</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>401</TableCell>
                                <TableCell>Unauthorized</TableCell>
                                <TableCell>The request requires user authentication</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>404</TableCell>
                                <TableCell>Not Found</TableCell>
                                <TableCell>Couldn't find the trackDb entity with the given ID</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>500</TableCell>
                                <TableCell>Internal Server Error</TableCell>
                                <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>503</TableCell>
                                <TableCell>Service Unavailable</TableCell>
                                <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance of the
                                    server
                                </TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="logout" component="h4" variant="h6">
                        GET /api/logout
                    </Typography>
                    <p>
                        Logout and invalidate the current access token.
                    </p>
                    <p>
                        If the request is successful, the response body is a JSON object with message "Successfully
                        logged out".
                    </p>

                    <h4>Resource Information</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell><strong>Response formats</strong></TableCell>
                                    <TableCell>JSON</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Authentication</strong></TableCell>
                                    <TableCell>User+Auth-Token headers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Rate Limited</strong></TableCell>
                                    <TableCell>No</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Parameters</h4>
                    <p>None.</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    GET https://www.trackhubregistry.org/api/logout
    User: exampleuser
    Auth-Token: 6l5/GuIiOSCywuSI9HF1VU97clwb/CXPDFS0MyAB/HCZuxtjQBj4uORZL8NY3Yhi`
                        }
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    ...
    { "message": "Successfully logged out" }`
    }
  </pre>

                    <h4>HTTP Status Codes</h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Code</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Reason</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>200</TableCell>
                                    <TableCell>OK</TableCell>
                                    <TableCell>Request successful</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>401</TableCell>
                                    <TableCell>Unauthorized</TableCell>
                                    <TableCell>The request requires user authentication</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>Request cannot be fulfilled due to temporary overloading or maintenance
                                        of the server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
            </div>
        </>
    );
};


export default RefApiDocs;