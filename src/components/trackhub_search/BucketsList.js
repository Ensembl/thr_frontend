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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Chip from "@mui/material/Chip";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function BucketsList({params, facetFilterInfo, filterName}) {
    const classes = useStyles();

    const history = useHistory()

    const handleFilterLinks = (filterValue) => {
        params.delete('page')
        if(params.has(filterName)){
            history.push(`/search?${params.toString()}`)
        } else {
            history.push(`/search?${params.toString()}&${filterName}=${filterValue}`)
        }
    };

    return (
        <List className={classes.root}>
            {
                facetFilterInfo &&
                facetFilterInfo.buckets.map((facetFilterName) => {
                    const labelId = `list-label-${facetFilterName.key}`;

                    return (
                        <ListItem key={facetFilterName.key} dense button>
                            <ListItemText
                                id={labelId}
                                primary={facetFilterName.key}
                                onClick={() => handleFilterLinks(facetFilterName.key)}
                            />
                            <ListItemSecondaryAction>
                                    <Chip label={facetFilterName.doc_count} color={"primary"}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })
            }
        </List>
    );
}
