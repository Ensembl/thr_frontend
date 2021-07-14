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
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Divider from "@material-ui/core/Divider";
import parse from 'html-react-parser';
import TrackdbStatusChip from "../dashboard/TrackdbStatusChip";
import CloseIcon from '@material-ui/icons/Close';
import Moment from 'react-moment'
import Button from "@material-ui/core/Button";
import GenomeBrowsersLinks from "./GenomeBrowsersLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
    },
    paperContent: {
        margin: "20px",
        fontWeight: 400,
    },
    PanelTitle: {
        // fontWeight: 500,
        marginBottom: "10px"
    },
    PanelContent: {
        lineHeight: "2em"
    },
    chipContent: {
        marginLeft: "8px"
    },
    trackStatus: {
        float: "right",
        fontSize: "12px",
        borderRadius: "0px"
    },
    browserView: {
        float: "right",
        marginTop: "-70px"
    },
    divider: {
        marginBottom: "15px"
    },
    shortDivider: {
        margin: 'auto',
        marginTop: '15px',
        width: 200,
    },
    largeIcon: {
        marginBottom: "-7px"
    },
}));

export default function TrackHubPanels({trackDbInfo}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {/***** General Info Panel ******/}
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={2}>
                        <div className={classes.paperContent}>
                            <h3 className={classes.PanelTitle}>
                                General Info
                            </h3>
                            <Divider className={classes.divider}/>
                            <div className={classes.PanelContent}>
                                <div className={classes.trackStatus}>
                                    <TrackdbStatusChip trackdbStatus={trackDbInfo.status.message}/>
                                    <Moment unix>{trackDbInfo.status.last_update}</Moment>
                                </div>
                                <div>
                                    Remote data tracks:
                                    <Chip
                                        label={trackDbInfo.status.tracks.with_data.total}
                                        className={classes.chipContent}
                                        color={"primary"}
                                    />
                                </div>
                                <div>Data Type:
                                    <Chip label={trackDbInfo.type} className={classes.chipContent}/>
                                </div>
                                <div>File type(s):
                                    <ul>
                                        {
                                            Object.entries(trackDbInfo.file_type).map(
                                                ([fileType, fileTypeCount]) =>
                                                    <li key={fileType}>
                                                        {fileType}: <Chip label={fileTypeCount}
                                                                          className={classes.chipContent}
                                                                          color={"primary"}/>
                                                    </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className={classes.browserView}>
                                    <GenomeBrowsersLinks
                                        trackdbBrowserLinks={trackDbInfo.browser_links}
                                        assemblyAccession={trackDbInfo.assembly.accession}
                                        hubUrl={trackDbInfo.hub.url}
                                    />
                                </div>
                                <div>Source URL:
                                    <Button
                                        className={classes.chipContent}
                                        size="small"
                                        variant="outlined"
                                        href={trackDbInfo.source.url}
                                        target="_blank"
                                        color="default"
                                    >View
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    {/***** Hub Panel ******/}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.paperContent}>
                                <h3 className={classes.PanelTitle}>
                                    Hub
                                </h3>
                                <Divider className={classes.divider}/>
                                <div className={classes.PanelContent}>
                                    <div><strong>Name:</strong> {trackDbInfo.hub.name}</div>
                                    <div><strong>Short Label:</strong> {trackDbInfo.hub.short_label}</div>
                                    <div><strong>Long Label:</strong> {parse(`${trackDbInfo.hub.long_label}`)}</div>
                                    <div><strong>Assembly Hub:</strong>
                                        {trackDbInfo.hub.assembly || <CloseIcon className={classes.largeIcon}/>}
                                    </div>
                                    <div><strong>Public URL:</strong>
                                        <Button
                                            className={classes.chipContent}
                                            size="small"
                                            variant="outlined"
                                            href={trackDbInfo.hub.url}
                                            target="_blank"
                                            color="default"
                                        >View
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </Paper>
                    </Grid>
                    <br/>
                    {/***** Species Panel ******/}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.paperContent}>
                                <h3 className={classes.title}>
                                    Species
                                </h3>
                                <Divider className={classes.divider}/>
                                <div className={classes.PanelContent}>
                                    <div>
                                        <strong>
                                            <a href={`http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${trackDbInfo.species.taxon_id}`}
                                               target="_blank">Taxonomy</a>
                                        </strong>
                                        <Chip
                                            label={trackDbInfo.species.taxon_id}
                                            className={classes.chipContent}
                                            color="primary"
                                            component="a"
                                            href={`http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${trackDbInfo.species.taxon_id}`}
                                            target="_blank"
                                            clickable
                                        />
                                    </div>
                                    <div><strong>Scientific name:</strong> {trackDbInfo.species.scientific_name}</div>
                                    <div><strong>Common name:</strong> {trackDbInfo.species.common_name}</div>

                                    <Divider className={classes.shortDivider}/>

                                    <h3 className={classes.title}>
                                        Assembly Information
                                    </h3>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Accession</TableCell>
                                                    <TableCell>Name</TableCell>
                                                    <TableCell>Long Name</TableCell>
                                                    <TableCell>UCSC Synonym</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow key={trackDbInfo.assembly}>
                                                    <TableCell>
                                                        <a href={`http://www.ebi.ac.uk/ena/data/view/${trackDbInfo.assembly.accession}`}>
                                                            {trackDbInfo.assembly.accession}</a>
                                                    </TableCell>
                                                    <TableCell>{trackDbInfo.assembly.name}</TableCell>
                                                    <TableCell>{trackDbInfo.assembly.common_name}</TableCell>
                                                    <TableCell>{trackDbInfo.assembly.ucsc_synonym}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                </Grid>
                {/***** Error Log Panel in case they exist ******/}
                {
                    trackDbInfo.status.tracks.with_data.total_ko > 0 ?
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <div className={classes.paperContent}>
                                    <h3 className={classes.PanelTitle}>
                                        Error Log
                                    </h3>
                                    <Divider className={classes.divider}/>
                                    <div className={classes.PanelContent}>
                                        <div>
                                            <strong>
                                                {trackDbInfo.status.tracks.with_data.total_ko} / {trackDbInfo.status.tracks.total}
                                            </strong> tracks linked to remote data have problems.
                                            {
                                                trackDbInfo.status.tracks.with_data.total_ko > 10 &&
                                                <div>Showing the first 10:</div>
                                            }
                                        </div>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>#</TableCell>
                                                        <TableCell>Track Name</TableCell>
                                                        <TableCell>Remote Data URL</TableCell>
                                                        <TableCell>Error</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        // Showing the first 10 files
                                                        Object.entries(trackDbInfo.status.tracks.with_data.ko).slice(0, 10).map(
                                                            ([trackName, remoteDtaInfo], index) => (
                                                                <TableRow key={index}>
                                                                    <TableCell>{index + 1}</TableCell>
                                                                    <TableCell>{trackName}</TableCell>
                                                                    <TableCell>{remoteDtaInfo[0]}</TableCell>
                                                                    <TableCell>{remoteDtaInfo[1]}</TableCell>
                                                                </TableRow>
                                                            )
                                                        )
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                        : null
                }
            </Grid>
        </React.Fragment>
    );
}

