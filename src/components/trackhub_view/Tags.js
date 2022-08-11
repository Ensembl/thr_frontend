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
import makeStyles from '@mui/styles/makeStyles';
import Chip from '@mui/material/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: "15px",
        '& > *': {
            margin: theme.spacing(0.5),
        },
        "& .MuiChip-root": {
            borderRadius: 1
        }
    },
    tag_info: {
        backgroundColor: theme.palette.info.main,
        color: "white"
    },
    tag_success: {
        backgroundColor: theme.palette.success.main,
        color: "white"
    },
}));

export default function Tags(props) {
    const classes = useStyles();
    const {hubName, speciesScientificName, assemblyAccession} = props

    return (
        <div className={classes.root}>
            <Chip
                label={hubName}
                color="primary"
            />
            <Chip
                className={classes.tag_success}
                label={speciesScientificName}
            />
            <Chip
                className={classes.tag_info}
                label={assemblyAccession}
            />
        </div>
    );
}
