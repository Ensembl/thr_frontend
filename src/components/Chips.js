import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function Chips({trackdbStatus}) {
    const classes = useStyles();
    let status;

    // TODO: Work on this after doing the appropriate changes to the API
    if (trackdbStatus == '' || trackdbStatus == undefined) {
        status = <Chip icon={<ErrorOutlineIcon/>} label="Unknown"/>
    } else if (trackdbStatus == 'ok') {
        status = <Chip
            icon={<CheckCircleOutlineIcon/>}
            label="All is Well"
            component="a"
            href="#"
            color="primary"
            clickable
        />
    } else if (trackdbStatus == 'error') {
        status = <Chip
            icon={<HighlightOffIcon/>}
            label="Remote Data Unavailable"
            component="a"
            href="#"
            color="secondary"
            clickable
        />
    }

    return (
        <div className={classes.root}>
            {status}
        </div>
    );
}
