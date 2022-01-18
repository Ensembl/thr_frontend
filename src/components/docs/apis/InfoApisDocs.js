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
                <ClippedDrawer/>
                <main className={classes.content}>
                    <br/>
                    <Toolbar/>
                    <MainBreadcrumb item="Info"/>
                    <br/>
                    <Typography component="h1" variant="h4">
                        Info API
                    </Typography>

                    <h3 id="version">GET /api/info/version</h3>
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
                            GET https://www.trackhubregistry.org/api/info/version
                        </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                            {
                                `HTTP/1.0 200 OK
{
   "version": "0.01"
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

                    <h3 id="ping">GET /api/info/ping</h3>
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
                            GET https://www.trackhubregistry.org/api/info/ping
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

                    <h3 id="species">GET /api/info/species</h3>
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
                        GET https://www.trackhubregistry.org/api/info/species
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                    {
                        `HTTP/1.0 200 OK
["Homo sapiens","Danio rerio","Mus musculus","Arabidopsis thaliana","Brassica rapa","Drosophila simulans","Ricinus communis"]`
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

                    <h3 id="assemblies">GET /api/info/assemblies</h3>
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
                        GET https://www.trackhubregistry.org/api/info/assemblies
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
{"Brassica rapa": [ {"synonyms": [ "brarap1" ], "name":"Brapa_1.0", "accession":"GCA_000309985.1"} ],
    "Homo sapiens": [ {"synonyms": [ "hg19" ], "name":"GRCh37", "accession":"GCA_000001405.1"}, {"synonyms": [ "hg38" ], "name":"GRCh38", "accession":"GCA_000001405.15"} ],
    "Arabidopsis thaliana": [ {"synonyms": [ "aratha1" ], "name":"TAIR10", "accession":"GCA_000001735.1"} ],
    "Danio rerio": [ {"synonyms": [ "danrer10" ], "name":"GRCz10", "accession":"GCA_000002035.3"}, {"synonyms": [ "danrer7" ], "name":"Zv9", "accession":"GCA_000002035.2"} ],
    "Ricinus communis": [ {"synonyms": [ "riccom1" ], "name":"JCVI_RCG_1.1", "accession":"GCA_000151685.2"} ],
    "Mus musculus": [ {"synonyms": [ "mm10" ], "name":"GRCm38", "accession":"GCA_000001635.2"}, {"synonyms": [ "mm9" ], "name":"MGSCv37", "accession":"GCA_000001635.1"} ]
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

                    <h3 id="hubassemblies">GET /api/info/hubs_per_assembly/:assembly</h3>
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
                        GET https://www.trackhubregistry.org/api/info/hubs_per_assembly/GRCz10
                    </pre>

                    <pre className={classes.codeBlock}>
                        GET https://www.trackhubregistry.org/api/info/hubs_per_assembly/GCA_000002035.3
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
{"tot": 2}`
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

                    <h3 id="tracksassemblies">GET /api/info/tracks_per_assembly/:assembly</h3>
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
                        GET https://www.trackhubregistry.org/api/info/tracks_per_assembly/GRCz10
                    </pre>

                    <pre className={classes.codeBlock}>
                        GET https://www.trackhubregistry.org/api/info/tracks_per_assembly/GCA_000002035.3
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
{"tot": 11}`
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

                    <h3 id="trackhubs">GET /api/info/trackhubs</h3>
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
                        GET https://www.trackhubregistry.org/api/info/trackhubs
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `HTTP/1.0 200 OK
[
   {
      "name":"cshl2013",
      "url":"http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt",
      "shortLabel":"Plants",
      "longLabel":"CSHL Biology of Genomes meeting 2013 demonstration assembly hub",
      "trackdbs":[
         {
            "species":"3711",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/fI163v_DQDyf7WSKw-8v_g",
            "assembly":"GCA_000309985.1"
         },
         {
            "species":"3988",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/9ztv_BxMRo6gAE6z8CNPOg",
            "assembly":"GCA_000151685.2"
         },
         {
            "species":"3702",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/gOGRzcTSRd2l0LMQTufS4w",
            "assembly":"GCA_000001735.1"
         }
      ]
   },
   {
      "name":"miRcodeHub",
      "url":"http://www.mircode.org/ucscHub/hub.txt",
      "shortLabel":"miRcode microRNA sites",
      "longLabel":"Predicted microRNA target sites in GENCODE transcripts",
      "trackdbs":[
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/AR8hZ1QKR-exXMkJkxCAgg",
            "assembly":"GCA_000001405.1"
         }
      ]
   },
   {
      "name":"454paper",
      "url":"http://web.stanford.edu/~htilgner/2012_454paper/data/hub.txt",
      "shortLabel":"454 K562andHelaS3RNAseq",
      "longLabel":"Whole-Cell 454 Hela and K562 RNAseq",
      "trackdbs":[
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/QDIwMj-0QR-rRjSUeS2UyQ",
            "assembly":"GCA_000001405.1"
         }
      ]
   },
   {
      "name":"track_hub",
      "url":"http://ngs.sanger.ac.uk/production/grit/track_hub/hub.txt",
      "shortLabel":"GRC Genome Issues under Review",
      "longLabel":"Sanger Genome Reference Informatics Team: Genome issues and other features",
      "trackdbs":[
         {
            "species":"7955",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/4_c-YWQASiayXpf11BZ5Aw",
            "assembly":"GCA_000002035.2"
         },
         {
            "species":"7955",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/dMmLmnVgQgWmAUcxKASgng",
            "assembly":"GCA_000002035.3"
         },
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/-MXT_AKKTHi9IQvC3Y5tZQ",
            "assembly":"GCA_000001405.1"
         },
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/8XUZuzoqQdSvcISZ5rirMA",
            "assembly":"GCA_000001405.15"
         },
         {
            "species":"10090",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/7I5tcGcCTE2BxgmtajXLYA",
            "assembly":"GCA_000001635.1"
         },
         {
            "species":"10090",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/tMOCJ3MBSv2k2b7paS6dkQ",
            "assembly":"GCA_000001635.2"
         }
      ]
   },
   {
      "name":"ThorntonLab",
      "url":"http://devlaeminck.bio.uci.edu/RogersUCSC/hub.txt",
      "shortLabel":"ThorntonHub",
      "longLabel":"DrosophilaGenomeAssemblies",
      "trackdbs":[
         {
            "species":"7240",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/gkQbds68R_-Qkj-HFa9BSg",
            "assembly":"GCA_000754195.2"
         }
      ]
   },
   {
      "name":"Blueprint_Hub_20150128",
      "url":"ftp://ftp.ebi.ac.uk/pub/databases/blueprint/releases/current_release/homo_sapiens/hub",
      "shortLabel":"Blueprint Hub",
      "longLabel":"Blueprint Epigenomics Data Hub",
      "trackdbs":[
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/C7wK0Ov2Tf2-Ei8FaPRpvw",
            "assembly":"GCA_000001405.1"
         }
      ]
   },
   {
      "name":"EnsemblRegulatoryBuild",
      "url":"http://ngs.sanger.ac.uk/production/ensembl/regulation/hub.txt",
      "shortLabel":"Ensembl Regulatory Build",
      "longLabel":"Evidence summaries and provisional results for the new Ensembl Regulatory Build",
      "trackdbs":[
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/HccITRN2QFSPN2RTlx2jWQ",
            "assembly":"GCA_000001405.15"
         },
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/zEnMYwioQD2MNutpWECpyA",
            "assembly":"GCA_000001405.1"
         }
      ]
   },
   {
      "name":"NHGRI-1",
      "url":"http://research.nhgri.nih.gov/manuscripts/Burgess/zebrafish/downloads/NHGRI-1/hub.txt",
      "shortLabel":"ZebrafishGenomics",
      "longLabel":"Burgess Lab Zebrafish Genomic Resources",
      "trackdbs":[
         {
            "species":"7955",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/jViT9wCASoqpvIu1PUCwvw",
            "assembly":"GCA_000002035.2"
         }
      ]
   },
   {
      "name":"xPADHub",
      "url":"http://johnlab.org/xpad/Hub/UCSC.txt",
      "shortLabel":"Cancer genome polyA site & usage",
      "longLabel":"An in-depth map of polyadenylation sites in cancer (matched-pair tissues and cell lines)",
      "trackdbs":[
         {
            "species":"9606",
            "uri":"https://www.trackhubregistry.org/api/search/trackdb/8a9goBD0RAWKJOsxH0wPXQ",
            "assembly":"GCA_000001405.1"
         }
      ]
   }
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