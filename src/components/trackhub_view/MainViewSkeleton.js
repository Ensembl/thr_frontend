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
import {Skeleton} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: "15px",
        '& > *': {
            margin: theme.spacing(0.5),
        },
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
    divider: {
        marginBottom: "15px"
    },
    shortDivider: {
        margin: 'auto',
        marginTop: '15px',
        width: 200,
    },
}));


function MainViewSkeleton() {
    const classes = useStyles();

    return (
        <div>
            {/*MainBreadcrumb*/}
            <Skeleton variant="rectangular" height={35}/>
            <br/><br/>
            {/*Tags*/}
            <div className={classes.root}>
                <Skeleton variant="rectangular" width={100} height={30}/>
                <Skeleton variant="rectangular" width={150} height={30}/>
                <Skeleton variant="rectangular" width={130} height={30}/>
            </div>
            {/*TrackHubPanels*/}
            <Grid container spacing={3}>
                {/***** General Info Panel ******/}
                <Grid item xs={6}>
                    <Paper className={classes.paper} elevation={2}>
                        <div className={classes.paperContent}>
                            <Typography className={classes.PanelTitle}>
                                <Skeleton variant="text" width={200} height={50}/>
                            </Typography>
                            <Divider className={classes.divider}/>
                            <div className={classes.PanelContent}>
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
                                    {/*Hub*/}
                                    <Skeleton variant="text" width={50} height={50}/>
                                </h3>
                                <Divider className={classes.divider}/>
                                <div className={classes.PanelContent}>
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
                                    {/*Species*/}
                                    <Skeleton variant="text" width={100} height={50}/>
                                </h3>
                                <Divider className={classes.divider}/>
                                <div className={classes.PanelContent}>
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

                                    <Divider className={classes.shortDivider}/>

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
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainViewSkeleton
