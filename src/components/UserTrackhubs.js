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
import DeleteIcon from '@material-ui/icons/Delete';
import Chips from "./Chips";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function UserTrackhubs(props) {
    const classes = useStyles();

    const {UserHubs} = props;

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
                        {UserHubs.map((hub) => (
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
                                        <DeleteIcon color="disabled"/>
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

