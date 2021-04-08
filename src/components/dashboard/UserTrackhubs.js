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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Chips from "./TrackdbStatus";
import * as settings from "../../settings";
import axios from "axios";
import AlertDialog from "./DeleteTrackdbAlert";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function UserTrackhubs(props) {
    const classes = useStyles();

    const {userHubs} = props;

    const handleDeleteTrackdb = trackdb_id => {

        console.log("trackdb_id --> ", trackdb_id)

        const token = localStorage.getItem('token');
        const apiUrlDeleteTrackdb = `${settings.API_SERVER}/api/trackdboooo/${trackdb_id}`;

        console.log("apiUrlDeleteTrackdb --> ", apiUrlDeleteTrackdb)

        axios.delete(apiUrlDeleteTrackdb, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            }
        )
        .then(response => {
            // console.log("getUserHubs response ---> ", response)
            this.setState({userHubs: response.data});
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (
        <Container component="main" maxWidth="lg">

            <Typography component="h1" variant="h5">
                Your Track Collections
            </Typography><br/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="center">Hub</TableCell>
                            <TableCell align="center">Assembly</TableCell>
                            <TableCell align="center">Schema</TableCell>
                            <TableCell align="center">Created</TableCell>
                            <TableCell align="center">Updated</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userHubs.map((hub) => (
                            hub.trackdbs.map((trackdb) => (
                                <TableRow key={trackdb.trackdb_id}>
                                    <TableCell component="th" scope="row">
                                        {trackdb.trackdb_id}
                                    </TableCell>
                                    <TableCell align="center">{hub.name}</TableCell>
                                    <TableCell align="center">{trackdb.assembly}</TableCell>
                                    <TableCell align="center">{trackdb.schema}</TableCell>
                                    <TableCell align="center">{trackdb.created}</TableCell>
                                    <TableCell align="center">{trackdb.updated}</TableCell>
                                    <TableCell align="center">
                                        <Chips trackdbStatus={trackdb.status}></Chips>
                                    </TableCell>
                                    <TableCell align="center">
                                        <VisibilityIcon color="disabled"/>
                                    </TableCell>
                                    <TableCell align="center">
                                        <AlertDialog trackdbId={trackdb.trackdb_id}></AlertDialog>
                                    </TableCell>
                                </TableRow>
                            ))
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

