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
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Divider from "@mui/material/Divider";
import parse from 'html-react-parser';
import TrackdbStatusChip from "../dashboard/TrackdbStatusChip";
import CloseIcon from '@mui/icons-material/Close';
import Moment from 'react-moment'
import Button from "@mui/material/Button";
import GenomeBrowsersLinks from "./GenomeBrowsersLinks";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Box} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


const styles = {
    paper: {
        padding: 1,
    },
    paperContent: {
        margin: "20px",
    },
    PanelContent: {
        lineHeight: "2em"
    },
    chipContent: {
        marginLeft: 1,
        borderRadius: "10px",
    },
    trackStatus: {
        float: "right",
        fontSize: "12px",
    },
    browserView: {
        float: "right",
        marginTop: "-70px"
    },
    divider: {
        marginBottom: 2,
    },
    shortDivider: {
        margin: 'auto',
        marginTop: '15px',
        width: 200,
    },
    largeIcon: {
        marginBottom: "-7px"
    },
};

export default function TrackHubPanels({trackDbInfo}) {

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {/***** General Info Panel ******/}
                <Grid item xs={12} sm={12} md={6}>
                    <Paper sx={styles.paper} elevation={2}>
                        <Box sx={styles.paperContent}>
                            <Typography component="h3" variant="h6">
                                General Info
                            </Typography>
                            <Divider sx={styles.divider}/>
                            <Box sx={styles.PanelContent}>
                                <Box sx={styles.trackStatus}>
                                    <TrackdbStatusChip trackdbStatus={trackDbInfo.status.message}/>
                                    <Moment unix>{trackDbInfo.status.last_update}</Moment>
                                </Box>
                                <div>
                                    Remote data tracks:
                                    <Chip
                                        label={trackDbInfo.status.tracks.with_data.total}
                                        sx={styles.chipContent}
                                        color={"primary"}
                                        size="small"
                                    />
                                </div>
                                <div>Data Type:
                                    <Chip label={trackDbInfo.type} sx={styles.chipContent} size="small"/>
                                </div>
                                <div>File type(s):
                                    <List>
                                        {
                                            Object.entries(trackDbInfo.file_type).map(
                                                ([fileType, fileTypeCount]) =>
                                                    <ListItem key={fileType}>
                                                        {fileType}: <Chip label={fileTypeCount}
                                                                          sx={styles.chipContent}
                                                                          color={"primary"}
                                                                          size="small"/>
                                                    </ListItem>
                                            )
                                        }
                                    </List>
                                </div>
                                <Box sx={styles.browserView}>
                                    <GenomeBrowsersLinks
                                        trackdbBrowserLinks={trackDbInfo.browser_links}
                                        assemblyAccession={trackDbInfo.assembly.accession}
                                        hubUrl={trackDbInfo.hub.url}
                                    />
                                </Box>
                                <div>Source URL:
                                    <Button
                                        sx={styles.chipContent}
                                        size="small"
                                        variant="outlined"
                                        href={trackDbInfo.source.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        endIcon={<OpenInNewIcon/>}
                                    >
                                        View
                                    </Button>
                                </div>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {/***** Hub Panel ******/}
                    <Grid item xs={12}>
                        <Paper sx={styles.paper}>
                            <Box sx={styles.paperContent}>
                                <Typography component="h3" variant="h6">
                                    Hub
                                </Typography>
                                <Divider sx={styles.divider}/>
                                <Box sx={styles.PanelContent}>
                                    <div><strong>Name:</strong> {trackDbInfo.hub.name}</div>
                                    <div><strong>Short Label:</strong> {trackDbInfo.hub.short_label}</div>
                                    <div><strong>Long Label:</strong> {parse(`${trackDbInfo.hub.long_label}`)}</div>
                                    <div><strong>Assembly Hub:</strong>
                                        {trackDbInfo.hub.assembly || <CloseIcon sx={styles.largeIcon}/>}
                                    </div>
                                    <div><strong>Public URL:</strong>
                                        <Button
                                            sx={styles.chipContent}
                                            size="small"
                                            variant="outlined"
                                            href={trackDbInfo.hub.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            endIcon={<OpenInNewIcon/>}
                                        >
                                            View
                                        </Button>
                                    </div>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <br/>
                    {/***** Species Panel ******/}
                    <Grid item xs={12}>
                        <Paper sx={styles.paper}>
                            <Box sx={styles.paperContent}>
                                <Typography component="h3" variant="h6">
                                    Species
                                </Typography>
                                <Divider sx={styles.divider}/>
                                <Box sx={styles.PanelContent}>
                                    <div>
                                        <strong>
                                            <a href={`http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${trackDbInfo.species.taxon_id}`}
                                               target="_blank" rel="noreferrer">Taxonomy <OpenInNewIcon fontSize="inherit"/></a>
                                        </strong>
                                        <Chip
                                            label={trackDbInfo.species.taxon_id}
                                            sx={styles.chipContent}
                                            color="primary"
                                            component="a"
                                            size="small"
                                            href={`http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${trackDbInfo.species.taxon_id}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            clickable
                                        />
                                    </div>
                                    <div><strong>Scientific name:</strong> {trackDbInfo.species.scientific_name}</div>
                                    <div><strong>Common name:</strong> {trackDbInfo.species.common_name}</div>

                                    <Divider sx={styles.shortDivider}/>
                                    <br/>
                                    <Typography component="h3" variant="h6">
                                        Assembly Information
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
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
                                                        <a href={`http://www.ebi.ac.uk/ena/data/view/${trackDbInfo.assembly.accession}`}
                                                        target="_blank" rel="noreferrer">{trackDbInfo.assembly.accession} <OpenInNewIcon fontSize="inherit"/></a>
                                                    </TableCell>
                                                    <TableCell>{trackDbInfo.assembly.name}</TableCell>
                                                    <TableCell>{trackDbInfo.assembly.common_name}</TableCell>
                                                    <TableCell>{trackDbInfo.assembly.ucsc_synonym}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
                {/***** Error Log Panel in case they exist ******/}
                {
                    trackDbInfo.status.tracks.with_data.total_ko > 0 ?
                        <Grid item xs={12}>
                            <Paper sx={styles.paper}>
                                <Box sx={styles.paperContent}>
                                    <Typography component="h3" variant="h6">
                                        Error Log
                                    </Typography>
                                    <Divider sx={styles.divider}/>
                                    <Box sx={styles.PanelContent}>
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
                                            <Table sx={styles.table} aria-label="simple table">
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
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        : null
                }
            </Grid>
        </React.Fragment>
    );
}

