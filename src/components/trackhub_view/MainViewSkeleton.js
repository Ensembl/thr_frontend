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
import { Skeleton } from '@mui/material';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const styles = {
    tagsStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: "15px",
        '& > *': {
            margin: 0.5,
        },
        "& .MuiChip-root": {
            borderRadius: 0
        }
    },
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


function MainViewSkeleton() {

    return (
        <>
            {/*MainBreadcrumb*/}
            <Skeleton variant="rectangular" height={35}/>
            <br/><br/>
            {/*Tags*/}
            <Box sx={styles.tagsStyle}>
                <Skeleton variant="rectangular" width={100} height={30}/>
                <Skeleton variant="rectangular" width={150} height={30}/>
                <Skeleton variant="rectangular" width={130} height={30}/>
            </Box>
            {/*TrackHubPanels*/}
            <Grid container spacing={3}>
                {/***** General Info Panel ******/}
                <Grid item xs={12} sm={12} md={6}>
                    <Paper sx={styles.paper} elevation={2}>
                        <Box sx={styles.paperContent}>
                            <Typography sx={styles.PanelTitle}>
                                <Skeleton variant="text" width={200} height={50}/>
                            </Typography>
                            <Divider sx={styles.divider}/>
                            <Box sx={styles.PanelContent}>
                                {/*Status*/}
                                <Skeleton variant="rectangular" width={150} height={30} style={{float: 'right'}}/>
                                {/*Remote data tracks*/}
                                <Skeleton variant="text" width={220} height={40}/>
                                {/*Data Type*/}
                                <Skeleton variant="text" width={200} height={40}/>
                                {/*File type(s)*/}
                                <Skeleton variant="text" width={150} height={40}/>
                                <Skeleton variant="text" width={150} height={40}/>
                                {/*Source URL*/}
                                <Skeleton variant="text" width={220} height={40}/>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {/***** Hub Panel ******/}
                    <Grid item xs={12}>
                        <Paper sx={styles.paper}>
                            <Box sx={styles.paperContent}>
                                <h3 sx={styles.PanelTitle}>
                                    {/*Hub*/}
                                    <Skeleton variant="text" width={50} height={50}/>
                                </h3>
                                <Divider sx={styles.divider}/>
                                <Box sx={styles.PanelContent}>
                                    {/*Name*/}
                                    <Skeleton variant="text" width={100} height={40}/>
                                    {/*Short Label*/}
                                    <Skeleton variant="text" width={200} height={40}/>
                                    {/*Long Label*/}
                                    <Skeleton variant="text" width={300} height={40}/>
                                    {/*Assembly Hub*/}
                                    <Skeleton variant="text" width={100} height={40}/>
                                    {/*Public URL*/}
                                    <Skeleton variant="text" width={150} height={40}/>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <br/>
                    {/***** Species Panel ******/}
                    <Grid item xs={12}>
                        <Paper sx={styles.paper}>
                            <Box sx={styles.paperContent}>
                                <h3 sx={styles.title}>
                                    {/*Species*/}
                                    <Skeleton variant="text" width={100} height={50}/>
                                </h3>
                                <Divider sx={styles.divider}/>
                                <Box sx={styles.PanelContent}>
                                    <div>
                                        {/*Taxonomy*/}
                                        <Skeleton variant="text" width={200} height={40}/>
                                    </div>
                                    <div>
                                        {/*Scientific name*/}
                                        <Skeleton variant="text" width={300} height={40}/>
                                    </div>
                                    <div>
                                        {/*Common name*/}
                                        <Skeleton variant="text" width={250} height={40}/>
                                    </div>

                                    <Divider sx={styles.shortDivider}/>

                                    <Typography>
                                        {/*Assembly Information*/}
                                        <Skeleton variant="text" width={150} height={50}/>
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        {/*Accession*/}
                                                        <Skeleton variant="text" width={100} height={40}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        {/*Name*/}
                                                        <Skeleton variant="text" width={90} height={40}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        {/*Long Name*/}
                                                        <Skeleton variant="text" width={120} height={40}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        {/*UCSC Synonym*/}
                                                        <Skeleton variant="text" width={100} height={40}/>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <Skeleton variant="text" width={130} height={40}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Skeleton variant="text" width={120} height={40}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Skeleton variant="text" width={150} height={40}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Skeleton variant="text" width={80} height={40}/>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default MainViewSkeleton
