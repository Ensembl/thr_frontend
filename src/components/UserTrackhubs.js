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
                Your track collections
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Hub</TableCell>
                            <TableCell align="right">Assembly</TableCell>
                            <TableCell align="right">Schema</TableCell>
                            <TableCell align="right">Created</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {UserHubs.map((hub) => (
                            <TableRow key={hub.hub_id}>
                                <TableCell component="th" scope="row">
                                    {hub.hub_id}
                                </TableCell>
                                <TableCell align="right">{hub.name}</TableCell>
                                <TableCell align="right">{hub.fat}</TableCell>
                                <TableCell align="right">{hub.carbs}</TableCell>
                                <TableCell align="right">{hub.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

