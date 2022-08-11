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
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function CurrentFiltersChips({params, filter}) {
    const classes = useStyles();

    const history = useHistory()

    const handleDelete = filter => {
        params.delete(filter)
        params.delete('page')
        history.push(`/search?${params.toString()}`)
    };

    return (
        <div className={classes.root}>
            <Chip
                avatar={<Avatar style={{ color: 'white' }}>{filter.charAt(0).toUpperCase()}</Avatar>}
                label={params.get(filter)}
                onDelete={() => handleDelete(filter)}
                color="primary"
                variant="outlined"
            />
        </div>
    );
}
