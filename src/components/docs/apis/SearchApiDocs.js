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
import ClippedDrawer from "./ClippedDrawer";
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

const SearchApiDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <ClippedDrawer/>
                <main className={classes.content}>
                    <br/>
                    <Toolbar/>
                    <MainBreadcrumb item="Registration"/>
                    <br/>
                    <Typography id="top" component="h1" variant="h4">
                        Search API
                    </Typography>

                    <h2 id="search">POST /api/search</h2>
                    <p>
                        Search track hubs using a query specified in the message body. Read the <a
                        href="/docs/search">Search docs</a> for information on how to perform a
                        query.
                    </p>
                    <p>
                        You may also specify some (optional) filters in the message body:
                        <ul>
                            <li>
                                <em>species</em>: the species scientific name
                            </li>
                            <li>
                                <em>assembly</em>: the name of the assembly
                            </li>
                            <li>
                                <em>accession</em>: INSDC accession
                            </li>
                            <li>
                                <em>hub</em>: the hub name
                            </li>
                        </ul>
                    </p>
                    <p>
                        If the request is successful, the response is formatted as a JSON hash with the following
                        key/value pairs:
                        <ul>
                            <li>
                                <em>total_entries</em>: the total number of search results
                            </li>
                            <li>
                                <em>items</em>: an array of search results. Each item is a minimal representation of the
                                trackDb matching the query, as stored in the Registry. It contains basic information
                                (species, assembly, hub etc.) plus an id which can used with the <a
                                href="#trackdb">/api/search/trackdb/:id</a> endpoint to retrieve the full trackDb
                                document from the Registry.
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
                    <p>
                        <ul>
                            <li>
                                <em>page</em>: the wanted page of the search results (default: 1)
                            </li>
                            <li>
                                <em>entries_per_page</em>: the number of search results per page (default: 5)
                            </li>
                            <li>
                                <em>all</em>: if non-zero, request to return all results with no pagination, page and
                                entries_per_page parameters are ignored (default: 0)
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
                                    <TableCell><strong>Format</strong></TableCell>
                                    <TableCell>
                                        <pre className={classes.codeBlock}>
            {
                `{
    "type": "object",
    "properties": {
        "query": {
            "type": "string"
        },
        "species": {
            "type": "string"
        },
        "assembly": {
            "type": "string"
        },
        "accession": {
            "type": "string",
            "pattern": "^GCA_[0-9]+.[0-9]+$"
        },
        "hub": {
            "type": "string"
        },
        "type": {
            "type": "string",
            "enum": [ "genomics", "epigenomics", "transcriptomics", "proteomics" ]
        }
    }
}`
            }
                                        </pre>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><strong>Example</strong></TableCell>
                                    <TableCell>
                                    <pre className={classes.codeBlock}>
                                        {`{"query" : "monocyte male", assembly: "GRCh37"}`}
                                    </pre>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>


                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
                        {
                            `    POST https://www.trackhubregistry.org/api/search?page=1
    {
      "query": "monocyte male",
      "assembly": "GRCh37"
    }`
                        }
                    </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `    HTTP/1.0 200 OK
    {
      "total_entries":1,
      "items":[
               {
                 "score":0.26635534,
                        "id":"C7wK0Ov2Tf2-Ei8FaPRpvw",
                  "version":"v1.0",
                 "status":{
                   "last_update":"1500768407",
                   "message":"All is Well"
                 },
                 "hub":{
                   "shortLabel":"Blueprint Hub",
                   "url":"ftp://ftp.ebi.ac.uk/pub/databases/blueprint/releases/current_release/homo_sapiens/hub",
                   "name":"Blueprint_Hub_20150128",
                   "longLabel":"Blueprint Epigenomics Data Hub"
                 },
                 "species":{
                   "scientific_name":"Homo sapiens",
                   "common_name":"human",
                   "tax_id":"9606"
                 },
                 "type":"genomics",
                 "assembly":{
                   "synonyms":"hg19",
                   "long_name":"Genome Reference Consortium Human Build 37 (GRCh37)",
                   "name":"GRCh37",
                   "accession":"GCA_000001405.1"
                 }
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
                                    <TableCell>400</TableCell>
                                    <TableCell>Bad request</TableCell>
                                    <TableCell>Empty request body or unable to perform query</TableCell>
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

                    <h3 id="trackdb">GET /api/search/trackdb/:id</h3>
                    <p>
                        Retrieve the document in the Registry representing the trackDb with the given ID.
                    </p>
                    <p>
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
                                    <TableCell>A trackDb document ID</TableCell>
                                    <TableCell><var>gOGRzcTSRd2l0LMQTufS4w</var></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <h4>Example Request</h4>
                    <pre className={classes.codeBlock}>
    {
        `GET https://www.trackhubregistry.org/api/search/trackdb/gOGRzcTSRd2l0LMQTufS4w`
    }
  </pre>

                    <h4>Example Response</h4>
                    <pre className={classes.codeBlock}>
    {
        `HTTP/1.0 200 OK
{
    "source": {
        "checksum": "c70af2c480087b45848d60c9ae76f1ad",
        "url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/trackDb.txt"
    },
    "hub": {
        "shortLabel": "Plants",
        "url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/hub.txt",
        "name": "cshl2013",
        "longLabel": "CSHL Biology of Genomes meeting 2013 demonstration assembly hub"
    },
    "version": "v1.0",
    "owner": "trackhub1",
    "status": {
        "last_update": 1500768407,
        "message": "All is Well"
    },
    "species": {
        "scientific_name": "Arabidopsis thaliana",
        "common_name": "thale cress",
        "tax_id": "3702"
    },
    "assembly": {
        "synonyms": "araTha1",
        "name": "TAIR10",
        "accession": "GCA_000001735.1"
    },
    "created": 1438615855,
    "type": "genomics",
    "configuration": {
        "repeatMasker_": {
            "priority": "149.1",
            "visibility": "dense",
            "compositeTrack": "on",
            "shortLabel": "RepeatMasker",
            "track": "repeatMasker_",
            "members": {
                "repeatMaskerOther_": {
                    "priority": "9",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "Other",
                    "track": "repeatMaskerOther_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.Other.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "Other Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerLowComplexity_": {
                    "priority": "6",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "Low Complexity",
                    "track": "repeatMaskerLowComplexity_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.Low_complexity.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "Low Complexity Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerSimple_": {
                    "priority": "5",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "Simple",
                    "track": "repeatMaskerSimple_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.Simple.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "Simple Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerSINE_": {
                    "priority": "1",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "SINE",
                    "track": "repeatMaskerSINE_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.SINE.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "SINE Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerLTR_": {
                    "priority": "3",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "LTR",
                    "track": "repeatMaskerLTR_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.LTR.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "LTR Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerLINE_": {
                    "priority": "2",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "LINE",
                    "track": "repeatMaskerLINE_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.LINE.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "LINE Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerRNA_": {
                    "priority": "8",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "RNA",
                    "track": "repeatMaskerRNA_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.RNA.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "RNA Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerDNA_": {
                    "priority": "4",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "DNA",
                    "track": "repeatMaskerDNA_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.DNA.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "DNA Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                },
                "repeatMaskerSatellite_": {
                    "priority": "7",
                    "spectrum": "on",
                    "colorByStrand": "50,50,150 150,50,50",
                    "parent": "repeatMasker_",
                    "shortLabel": "Satellite",
                    "track": "repeatMaskerSatellite_",
                    "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.rmsk.Satellite.bb",
                    "additional_fields": 1,
                    "type": "bigbed",
                    "maxWindowToDraw": "10000000",
                    "longLabel": "Satellite Repeating Elements by RepeatMasker",
                    "standard_fields": "6"
                }
            },
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/repeatMasker_.html",
            "group": "varRep",
            "html": "../trackDescriptions/repeatMasker",
            "noInherit": "on",
            "type": "bed",
            "longLabel": "Repeating Elements by RepeatMasker"
        },
        "windowMasker_": {
            "priority": "149.26",
            "visibility": "dense",
            "shortLabel": "WM + SDust",
            "track": "windowMasker_",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.windowMasker.bb",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/windowMasker_.html",
            "group": "varRep",
            "html": "../trackDescriptions/windowMasker",
            "configurable": 1,
            "type": "bigbed",
            "standard_fields": "3",
            "longLabel": "Genomic Intervals Masked by WindowMasker + SDust"
        },
        "ensGene": {
            "priority": "40",
            "visibility": "pack",
            "searchTrix": "ensGene.araTha1.ix",
            "track": "ensGene",
            "shortLabel": "Ensembl genes",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/ensGene.araTha1.bb",
            "searchIndex": "name",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/ensGene.html",
            "group": "genes",
            "color": "150,0,0",
            "configurable": 1,
            "type": "bigbed",
            "standard_fields": "12",
            "longLabel": "Ensembl genes from Arabidopsis_thaliana.TAIR10.18.gtf.gz"
        },
        "assembly_": {
            "priority": "10",
            "colorByStrand": "150,100,30 230,170,40",
            "visibility": "pack",
            "track": "assembly_",
            "shortLabel": "Assembly",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.assembly.bb",
            "altColor": "230,170,40",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/assembly_.html",
            "group": "map",
            "color": "150,100,30",
            "html": "assembly",
            "type": "bigbed",
            "standard_fields": "6",
            "longLabel": "Assembly"
        },
        "simpleRepeat_": {
            "priority": "149.3",
            "visibility": "dense",
            "shortLabel": "Simple Repeats",
            "track": "simpleRepeat_",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.simpleRepeat.bb",
            "additional_fields": 1,
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/simpleRepeat_.html",
            "group": "varRep",
            "html": "../trackDescriptions/simpleRepeat",
            "type": "bigbed",
            "standard_fields": "4",
            "longLabel": "Simple Tandem Repeats by TRF"
        },
        "blatBraRap1": {
            "priority": "160",
            "visibility": "dense",
            "shortLabel": "blat braRap1",
            "track": "blatBraRap1",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/blatAraTha1ToBraRap1.bb",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/blatBraRap1.html",
            "group": "compGeno",
            "configurable": 1,
            "type": "bigbed",
            "longLabel": "lift-over blat to braRap1",
            "standard_fields": "12"
        },
        "gap_": {
            "priority": "11",
            "visibility": "dense",
            "shortLabel": "Gap",
            "track": "gap_",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.gap.bb",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/gap_.html",
            "group": "map",
            "color": "0,0,0",
            "html": "gap",
            "type": "bigbed",
            "standard_fields": "4",
            "longLabel": "Gap"
        },
        "blatRicCom1": {
            "priority": "170",
            "visibility": "dense",
            "shortLabel": "blat ricCom1",
            "track": "blatRicCom1",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1ToRicCom1.bb",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/blatRicCom1.html",
            "group": "compGeno",
            "configurable": 1,
            "type": "bigbed",
            "longLabel": "lift-over blat to ricCom1",
            "standard_fields": "12"
        },
        "lastzBraRap1": {
            "priority": "150",
            "visibility": "dense",
            "shortLabel": "lastz braRap1",
            "track": "lastzBraRap1",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/lastzAraTha1ToBraRap1.bb",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/lastzBraRap1.html",
            "group": "compGeno",
            "configurable": 1,
            "type": "bigbed",
            "longLabel": "lastz chain to braRap1",
            "standard_fields": "12"
        },
        "gc5Base_": {
            "priority": "23.5",
            "visibility": "full",
            "shortLabel": "GC Percent",
            "signal_range": [
                "0",
                "100"
            ],
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.gc5Base.bw",
            "maxHeightPixels": "128:36:16",
            "color": "0,0,0",
            "group": "map",
            "autoScale": "Off",
            "html": "../trackDescriptions/gc5Base",
            "graphTypeDefault": "Bar",
            "longLabel": "GC Percent in 5-Base Windows",
            "viewLimits": "30:70",
            "track": "gc5Base_",
            "gridDefault": "OFF",
            "altColor": "128,128,128",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/gc5Base_.html",
            "type": "bigwig",
            "windowingFunction": "Mean"
        },
        "genscan_": {
            "priority": "50",
            "visibility": "pack",
            "shortLabel": "Genscan Genes",
            "track": "genscan_",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.genscan.bb",
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/genscan_.html",
            "group": "genes",
            "color": "170,100,0",
            "configurable": 1,
            "html": "../trackDescriptions/genscan",
            "type": "bigbed",
            "standard_fields": "12",
            "longLabel": "Genscan Gene Predictions"
        },
        "cpgIslandExt_": {
            "priority": "90",
            "visibility": "pack",
            "track": "cpgIslandExt_",
            "shortLabel": "CpG Islands",
            "bigDataUrl": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/bbi/araTha1.cpgIslandExt.bb",
            "altColor": "128,228,128",
            "additional_fields": 1,
            "description_url": "http://genome-test.gi.ucsc.edu/~hiram/hubs/Plants/araTha1/cpgIslandExt_.html",
            "group": "regulation",
            "color": "0,100,0",
            "html": "../trackDescriptions/cpgIslandExt",
            "type": "bigbed",
            "standard_fields": "4",
            "longLabel": "CpG Islands (Islands < 300 Bases are Light Green)"
        }
    }
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
                                <TableCell>404</TableCell>
                                <TableCell>Not found</TableCell>
                                <TableCell>Couldn't find trackDb document with the given ID</TableCell>
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
                </main>
            </div>
        </>
    );
};


export default SearchApiDocs;