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
import ClippedDrawer from "./ClippedDrawer";
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
                <ClippedDrawer/>
                <main className={classes.content}>
                    <br/>
                    <Toolbar/>
                    <MainBreadcrumb item="API"/>
                    <br/>
                    <Typography id="top" component="h1" variant="h4">
                        Track Hub Registry APIs
                    </Typography>

                    <p>
                        The Track Hub Registry implements various APIs which allow a client to interact with the
                        Registry using a RESTful application development style:
                        <ul>
                            <li><a href="/docs/api/info">Info API</a>: provides basic information
                                about the service from the Registry;
                            </li>
                            <li><a href="/docs/api/registration">Registration API</a>:
                                provides support for hub providers who want to register and manage their track
                                data hubs with the registry;
                            </li>
                            <li><a href="/docs/api/search">Search API</a>: provides
                                support for genome browsers who are building interfaces to display and
                                search publicly available track hubs.
                            </li>
                        </ul>
                        The Registry communicates via an API client over HTTP, exchanging representations of objects
                        in the form of JSON document elements. You use HTTP GET requests to retrieve the current
                        representation of an object, HTTP POST and PUT requests to create or modify an object, and
                        HTTP DELETE requests to delete an object.
                    </p>
                    <p>
                        Track Hub Registry clients implement a RESTful workflow, making HTTP requests to the server
                        and retrieving the information they need from the server's responses. REST, an acronym for
                        Representational State Transfer, describes an architectural style characteristic of programs
                        that rely on the inherent properties of hypermedia to create and modify the state of an
                        object whose serialized representation is accessible via an URL. If the URL of such an
                        object is known to a client, the client can use an HTTP GET request to retrieve the
                        representation of the object. In the Registry APIs, this representation is a JSON document.
                        In a RESTful workflow, documents that represent an object state are passed back and forth
                        between a client and a service with the explicit assumption that neither party need to know
                        anything about an object other than what is presented in a single request or response. The
                        URLs at which these documents are available often persist beyond the lifetime of the request
                        or response that includes them.
                    </p>
                    <p>
                        Application programs written to a REST API use HTTP requests that are often executed by a
                        script or other programmatic access to make remote procedure calls that create, retrieve,
                        update, or delete objects that the API defines. The operations themselves are HTTP requests
                        and are generic to all HTTP clients. All RESTful workflows follow a common pattern:
                        <ul>
                            <li>Make an HTTP request, typically GET, PUT, POST, or DELETE. The target of this
                                request is either a well-known URL or a URL obtained from the response to a previous
                                request. For example, a GET request to a track hub URL returns links to trackDb
                                objects that the organization contains;
                            </li>
                            <li>Examine the response, which always includes an HTTP response code and usually
                                includes a body. In the Registry APIs, a response body is a JSON representation of
                                an object, including elements and attributes that represent object properties, links
                                that implement operations on the object or provide references to contained or
                                containing objects. The response also includes an HTTP response code, which
                                indicates whether the request succeeded or failed.
                            </li>
                        </ul>
                    </p>

                    <h3 id="request">API Requests</h3>
                    <p>
                        Requests are typically categorised in terms of the type of requested operation: create,
                        retrieve, update, and delete. This sequence of verbs is often abbreviated with the acronym
                        CRUD.
                        <br/><br/>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>HTTP Verb</strong></TableCell>
                                        <TableCell><strong>Type</strong></TableCell>
                                        <TableCell><strong>Summary</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>POST</TableCell>
                                        <TableCell>Creates</TableCell>
                                        <TableCell>Create new object</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>GET</TableCell>
                                        <TableCell>Retrieve</TableCell>
                                        <TableCell>Retrieve object representation</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>PUT</TableCell>
                                        <TableCell>Update</TableCell>
                                        <TableCell>Modifies existing object</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>DELETE</TableCell>
                                        <TableCell>Delete</TableCell>
                                        <TableCell>Delete existing object</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </p>

                    <h4 id="auth">Authentication/Authorisation</h4>
                    <p>
                        HTTP communications between an API client and the server are secured with SSL. The
                        Registration API implements Basic HTTP Authentication, as defined by RFC 2617, to allow
                        clients to login and obtain an authentication token. Access tokens allow clients to send
                        individual authorised HTTP requests by including an auth-token header in the request.
                    </p>

                    <h4 id="requestheaders">Request Headers</h4>
                    <p>
                        The following HTTP headers can be included in API requests:
                        <br/><br/>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Header</strong></TableCell>
                                        <TableCell><strong>Description</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Authorization</TableCell>
                                        <TableCell>
                                            Login requests to the <a href="">Registration API</a> must
                                            include an Authorization header, as specified in RFC 1421. Credentials
                                            must be supplied in a MIME Base64 encoding.
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>User</TableCell>
                                        <TableCell>
                                            Requests to the Registration API from authenticated clients must
                                            include a User header.
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Auth-Token</TableCell>
                                        <TableCell>
                                            Requests to the Registration API from authenticated clients must
                                            include an API-key in the form of an Auth-Token header.
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Content-Type</TableCell>
                                        <TableCell>
                                            Requests that include a body (i.e. POST/PUT) must start with the
                                            appropriate HTTP Content-Type header set
                                            to <strong>application/json</strong>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </p>

                    <h4 id="requestbodies">Request Bodies</h4>
                    <p>
                        Some API endpoints allow or require requests to include a body. All request bodies must be
                        formatted as JSON documents. In these cases, the request must then start with the
                        header <em>Content-Type: application/json</em>. For an endpoint (link) in particular,
                        the Registry API uses a JSON validator that requires elements in the request body to comply
                        with a JSON schema that defines valid trackDb documents within the registry.
                    </p>

                    <h3 id="response">API Responses</h3>
                    <p>
                        All responses include an HTTP status code and, unless the status code is 204 (No Content),
                        a <em>Content-Type</em> header. Response content depends on the request. Some responses
                        include a document body, some include only a URL, and some are empty.
                    </p>

                    <h4>HTTP Response Codes</h4>
                    <p>
                        An API client expects a subset of HTTP status codes in a response.

                        <br/><br/>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>Status Code</strong></TableCell>
                                        <TableCell><strong>Status Name</strong></TableCell>
                                        <TableCell><strong>Description</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>200</TableCell>
                                        <TableCell>OK</TableCell>
                                        <TableCell>
                                            The request is valid and was completed. The response includes a document
                                            body
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>201</TableCell>
                                        <TableCell>Created</TableCell>
                                        <TableCell>
                                            The request is valid. The requested object was created and can be
                                            found at the URL specified in the Location header
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>400</TableCell>
                                        <TableCell>Bad Request</TableCell>
                                        <TableCell>
                                            The request body is malformed, incomplete, or otherwise invalid
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>401</TableCell>
                                        <TableCell>Unauthorized</TableCell>
                                        <TableCell>
                                            HTTP basic authentication failed (an Authorization header was
                                            expected but not found, or invalid user credentials), or token based
                                            authorisation failed (User/Auth-Token headers were expected but not
                                            found or invalid auth-token)
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>404</TableCell>
                                        <TableCell>Not Found</TableCell>
                                        <TableCell>
                                            One or more objects specified in the request could not be found
                                            in the specified container
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>405</TableCell>
                                        <TableCell>Method Not Allowed</TableCell>
                                        <TableCell>
                                            The method specified in the Request-Line is not allowed for the
                                            resource identified by the Request-URI <em>(NOTE: the response MUST
                                            include an Allow header containing a list of valid methods for the
                                            requested resource)</em>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>500</TableCell>
                                        <TableCell>Internal Server Error</TableCell>
                                        <TableCell>
                                            The request was received but could not be completed because of an
                                            internal error at the server
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>503</TableCell>
                                        <TableCell>Service Unavailable</TableCell>
                                        <TableCell>
                                            The server is currently unable to handle the request due to a
                                            temporary overloading or maintenance of the server. The implication is
                                            that this is a temporary condition which will be alleviated after some
                                            delay. If known, the length of the delay MAY be indicated in
                                            a <em>Retry-After</em> header. If no <em>Retry-After</em> is
                                            given, the client SHOULD handle the response as it would for a 500
                                            response
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </p>
                </main>
            </div>
        </>
    );
};


export default ThrApisDocs;