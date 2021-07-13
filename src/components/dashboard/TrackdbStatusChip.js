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
import Chip from '@material-ui/core/Chip';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
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
    status_error: {
        backgroundColor: theme.palette.error.main,
        color: "white"
    },
    status_success: {
        backgroundColor: theme.palette.success.main,
        color: "white"
    },
    status_unchecked: {
        backgroundColor: theme.palette.default,
        color: "white"
    }
}));

export default function TrackdbStatusChip({trackdbStatus}) {
    const classes = useStyles();
    let status;

    if (trackdbStatus === "" || trackdbStatus === undefined) {
        status = <Chip icon={<ErrorOutlineIcon/>} label="Unchecked"/>
    } else if (trackdbStatus === 'All is Well') {
        status = <Chip
            className={classes.status_success}
            icon={<CheckCircleOutlineIcon className={classes.status_success}/>}
            label="All is Well"
        />
    } else if (trackdbStatus === "Remote Data Unavailable") {
        status = <Chip
            className={classes.status_error}
            icon={<HighlightOffIcon className={classes.status_error}/>}
            label="Remote Data Unavailable"
        />
    }

    return (
        <div className={classes.root}>
            {status}
        </div>
    );
}
