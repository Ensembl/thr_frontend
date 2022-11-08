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
import {TableCell, TableHead, Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import MainBreadcrumb from "../../generic/MainBreadcrumb";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import ApisDocsMenu from "./ApisDocsMenu";
import CssBaseline from "@mui/material/CssBaseline";

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
    codeBlock: {
        display: 'block',
        borderRadius: '5px',
        padding: '10px',
        background: '#eeeeee',
        overflowX: 'scroll',
        minWidth: '100px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const InfoApisDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ApisDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Info"/>
                    <br/>
                    <Typography component="h1" variant="h4">
                        Info API
                    </Typography>
                    <br/>
                    <Typography id="version" component="h4" variant="h5">
                        GET /api/info/version
                    </Typography>
                    <p>
                        Returns the current version of all the Registry APIs.
                    </p>
                    <p>
                        If the request is successful, the Response is an hash with one key, <em>version</em>,
                        whose value is a string which identifies the API version.
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
                    <p>None</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                            GET {window.location.origin}/api/info/version
                        </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                            {
                                `HTTP/1.0 200 OK
{
   "version": "0.8.1"
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
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>
                                        Request cannot be fulfilled due to temporary overloading or maintenance of
                                        the server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="ping" component="h4" variant="h5">
                        GET /api/info/ping
                    </Typography>
                    <p>
                        Checks if the service is alive.
                    </p>
                    <p>
                        If the request is successful, the response is a hash with one key, <em>ping</em>. If
                        it's value is 1 the service is available.
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
                    <p>None</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                            GET {window.location.origin}/api/info/ping
                        </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                            {
                                `HTTP/1.0 200 OK
{
    "ping": 1
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
                                    <TableCell>410</TableCell>
                                    <TableCell>Gone</TableCell>
                                    <TableCell>Storage server unavailable</TableCell>
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
                                        of
                                        the
                                        server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="species" component="h4" variant="h5">
                        GET /api/info/species
                    </Typography>
                    <p>
                        Returns the set of species the track hubs registered in the Registry contain data for.
                    </p>
                    <p>
                        If the request is successful, the response is an array containing the scientific names of
                        the species.
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
                    <p>None</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/species
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                    {
                        `HTTP/1.0 200 OK
[
    "Homo sapiens",
    "Phaeodactylum tricornutum CCAP 1055/1",
    "Pythium arrhenomanes ATCC 12531",
    "Colletotrichum graminicola M1.001",
    "Colletotrichum higginsianum",
    "Colletotrichum sublineola",
    "Brassica rapa",
    "Mus musculus",
    "Chlamydomonas reinhardtii",
    "Solanum tuberosum",
    "Zea mays",
    "Arabidopsis thaliana",
    "Brachypodium distachyon",
    "Triticum aestivum",
    ...
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
                    <Typography id="assemblies" component="h4" variant="h5">
                        GET /api/info/assemblies
                    </Typography>
                    <p>
                        Returns the set of assemblies the track hubs registered in the Registry contain data for.
                        The returned assemblies are grouped by their corresponding species.
                    </p>
                    <p>
                        If the request is successful, the response is a hash where a key is a species scientific
                        name, and whose value is an array of hashes, each one representing an assembly for that
                        species and containing its name, synonyms and accession.
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
                    <p>None</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/assemblies
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
{
    "Homo sapiens": [
        {
            "name": "GRCh38",
            "accession": "GCA_000001405.15",
            "synonyms": [
                "hg38"
            ]
        },
        {
            "name": "GRCh37",
            "accession": "GCA_000001405.1",
            "synonyms": [
                "hg19"
            ]
        },
        {
            "name": "GRCh38.p13",
            "accession": "GCA_000001405.28",
            "synonyms": [
                "hg38"
            ]
        },
        {
            "name": "GRCh38.p12",
            "accession": "GCA_000001405.27",
            "synonyms": [
                "hg38"
            ]
        },
        {
            "name": "T2T-CHM13v2.0",
            "accession": "GCA_009914755.4",
            "synonyms": [
                "GCA_009914755.4"
            ]
        }
    ],
    "Phaeodactylum tricornutum CCAP 1055/1": [
        {
            "name": "ASM15095v2",
            "accession": "GCA_000150955.2",
            "synonyms": [
                "ASM15095v2"
            ]
        }
    ],
    "Pythium arrhenomanes ATCC 12531": [
        {
            "name": "par_scaffolds_v1",
            "accession": "GCA_000387505.2",
            "synonyms": [
                "par_scaffolds_v1"
            ]
        }
    ],
    "Colletotrichum graminicola M1.001": [
        {
            "name": "C_graminicola_M1_001_V1",
            "accession": "GCA_000149035.1",
            "synonyms": [
                "C_graminicola_M1_001_V1"
            ]
        }
    ],
    "Colletotrichum higginsianum": [
        {
            "name": "ASM31379v2",
            "accession": "GCA_000313795.2",
            "synonyms": [
                "GCA_000313795.2"
            ]
        }
    ],
    "Colletotrichum sublineola": [
        {
            "name": "ASM69613v1",
            "accession": "GCA_000696135.1",
            "synonyms": [
                "ASM69613v1"
            ]
        }
    ],
    "Brassica rapa": [
        {
            "name": "Brapa_1.0",
            "accession": "GCA_000309985.1",
            "synonyms": [
                "braRap1"
            ]
        }
    ]
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
                    <Typography id="hubassemblies" component="h4" variant="h5">
                        GET /api/info/hubs_per_assembly/:assembly
                    </Typography>
                    <p>
                        Returns the number of hubs for a given assembly, specified either by INSDC name or
                        accession.
                    </p>
                    <p>
                        If the request is successful, the response is a hash with a key "tot", whose value is the
                        total number of hubs which contains data for the specified assembly.
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
                    <p>The <strong>INSDC</strong> name or accession of the assembly</p>

                    <h4>Example Requests</h4>
                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/hubs_per_assembly/GRCz10
                    </pre>

                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/hubs_per_assembly/GCA_000002035.3
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
{
    "tot": 4
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
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>
                                        Request cannot be fulfilled due to temporary overloading or maintenance of
                                        the server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="tracksassemblies" component="h4" variant="h5">
                        GET /api/info/tracks_per_assembly/:assembly
                    </Typography>
                    <p>
                        Returns the number of tracks for a given assembly, specified by INSDC name or accession.
                    </p>
                    <p>
                        If the request is successful, the response is a hash with a key "tot", whose value is the
                        total number of tracks which contains data for the specified assembly.
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
                    <p>The <strong>INSDC</strong> name or accession of the assembly</p>

                    <h4>Example Request</h4>

                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/tracks_per_assembly/GRCz10
                    </pre>

                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/tracks_per_assembly/GCA_000002035.3
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
{
    "tot": 19
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
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>
                                        Request cannot be fulfilled due to temporary overloading or maintenance of
                                        the server
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <br/>
                    <Typography id="trackhubs" component="h4" variant="h5">
                        GET /api/info/trackhubs
                    </Typography>
                    <p>
                        Return the list of registered track data hubs.
                    </p>
                    <p>
                        If the request is successful, the response is an array of hashes identifying trackhubs. Each
                        trackhub hash has the following key/value pairs:
                        <ul>
                            <li>
                                <em>name</em>: the single-word name of the directory containing the track hub files;
                            </li>
                            <li>
                                <em>url</em>: the track hub remote URL;
                            </li>
                            <li>
                                <em>shortLabel</em>: the short name for the track hub;
                            </li>
                            <li>
                                <em>longLabel</em>: the longer descriptive label for the track hub;
                            </li>
                            <li>
                                <em>trackdbs</em>: a list of hashes containing information for each trackDb (i.e.
                                assembly specific data files) registered for the track hub. Each trackDb hash contains
                                the species NCBI tax id and assembly accession, and the URI of the JSON representation of the
                                trackDb which can be retrieved from the Registry.
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
                    <p>None</p>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        GET {window.location.origin}/api/info/trackhubs
                    </pre>
{/*+ window.location.origin +*/}
                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP 200 OK
{
    "count": 8274,
    "next": "` + window.location.origin + `/api/info/trackhubs?limit=5&offset=5",
    "previous": null,
    "results": [
        {
            "name": "Blueprint_Hub_20160816",
            "shortLabel": "Blueprint Hub",
            "longLabel": "Blueprint Epigenomics Data Hub",
            "url": "http://ftp.ebi.ac.uk/pub/databases/blueprint/releases/current_release/homo_sapiens/hub/hub.txt",
            "trackdbs": [
                {
                    "species": "9606",
                    "uri": "` + window.location.origin + `/api/search/trackdb/1",
                    "assembly": "GCA_000001405.15"
                }
            ]
        },
        {
            "name": "SRP040703",
            "shortLabel": "RNA-Seq alignment hub SRP040703",
            "longLabel": "Next generation sequencing of Phaeodactylum tricornutum grown with and without nitrogen",
            "url": "ftp://ftp.ensemblgenomes.org/pub/misc_data/track_hubs/protists//SRP040703/hub.txt",
            "trackdbs": [
                {
                    "species": "556484",
                    "uri": "` + window.location.origin + `/api/search/trackdb/2",
                    "assembly": "GCA_000150955.2"
                }
            ]
        },
        {
            "name": "SRP006964",
            "shortLabel": "RNA-Seq alignment hub SRP006964",
            "longLabel": "Pythium Comparative Transcriptome Analysis SRP006964",
            "url": "ftp://ftp.ensemblgenomes.org/pub/misc_data/track_hubs/protists//SRP006964/hub.txt",
            "trackdbs": [
                {
                    "species": "1223556",
                    "uri": "` + window.location.origin + `/api/search/trackdb/3",
                    "assembly": "GCA_000387505.2"
                },
                {
                    "species": "1223557",
                    "uri": "` + window.location.origin + `/api/search/trackdb/3010",
                    "assembly": "GCA_000387425.2"
                },
                {
                    "species": "1223558",
                    "uri": "` + window.location.origin + `/api/search/trackdb/6157",
                    "assembly": "GCA_000387465.2"
                },
                {
                    "species": "1223560",
                    "uri": "` + window.location.origin + `/api/search/trackdb/6482",
                    "assembly": "GCA_000387545.2"
                }
            ]
        },
        {
            "name": "SRP123414",
            "shortLabel": "RNA-Seq alignment hub SRP123414",
            "longLabel": "Colletotrichum graminicola CBS130836 Gene Expression Profiling on Sugar Beet Pulp - 32",
            "url": "ftp://ftp.ensemblgenomes.org/pub/misc_data/track_hubs/fungi/SRP123414/hub.txt",
            "trackdbs": [
                {
                    "species": "645133",
                    "uri": "` + window.location.origin + `/api/search/trackdb/4",
                    "assembly": "GCA_000149035.1"
                }
            ]
        },
        {
            "name": "SRP123425",
            "shortLabel": "RNA-Seq alignment hub SRP123425",
            "longLabel": "Colletotrichum higginsianum IMI349063 Gene Expression Profiling on MP - 7 SRP123425",
            "url": "ftp://ftp.ensemblgenomes.org/pub/misc_data/track_hubs/fungi/SRP123425/hub.txt",
            "trackdbs": [
                {
                    "species": "80884",
                    "uri": "` + window.location.origin + `/api/search/trackdb/5",
                    "assembly": "GCA_000313795.2"
                }
            ]
        }
    ]
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
                                    <TableCell>500</TableCell>
                                    <TableCell>Internal Server Error</TableCell>
                                    <TableCell>Request cannot be fulfilled due to unexpected condition</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>503</TableCell>
                                    <TableCell>Service Unavailable</TableCell>
                                    <TableCell>
                                        Request cannot be fulfilled due to temporary overloading or maintenance of
                                        the server
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


export default InfoApisDocs;