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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PublishIcon from '@material-ui/icons/Publish';
import {Equalizer, Search} from "@material-ui/icons";
import Chart from "./Chart";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <h1><PublishIcon/> Submit Data</h1>
                        <blockquote>
                            I want maximum visibility for my track hubs.
                        </blockquote>
                        <p>External track hub providers can register and submit their track databases to the
                            registry. <a href="#">Registration</a> is web-based and done
                            on this site; submission happens programatically via our RESTful API. Once submitted and
                            successfully validated, the track dbs become available for search by other users worldwide,
                            allowing for automatic and rapid integration into a genome browser.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <h1><Search/> Access Data</h1>
                        <blockquote>
                            How do I find omics tracks for an assembly of my favourite organism?
                        </blockquote>
                        <p>Track hubs can be searched based on metadata information. Free text <a
                            href="#">search</a> is provided from the search box in the
                            header of all track hub Registry web pages and in the middle of this page. Advanced search
                            options are available for more specific and customised searches.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <h1><Equalizer y={10}/> Stats</h1>
                        <p>A brief summary of the data content, hover over the column for exact numbers.</p>
                        <Chart></Chart>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container item xs={12} spacing={3}>
                <FormRow/>
            </Grid>
        </div>
    );
}
