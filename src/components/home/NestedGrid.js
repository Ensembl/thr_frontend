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
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
    },
    paperContent: {
        margin: "15px",
        fontWeight: 300,
    },
    title: {
        fontWeight: 300,
        lineHeight: "35px",
        fontSize: "32px",
    },
    quote: {
        lineHeight: "26px",
        fontSize: "19px",
        fontStyle: "italic",
    },
    text: {
        fontWeight: 300,
        lineHeight: "26px",
        fontSize: "14px",
    },
    largeIcon: {
        fontSize: 40,
        margin: -8,
        paddingRight: 5,
    },
}));

export default function NestedGrid() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <div className={classes.paperContent}>
                            <h1 className={classes.title}>
                                <PublishIcon className={classes.largeIcon}/> Submit Data
                            </h1>
                            <p className={classes.quote}>
                                I want maximum visibility for my track hubs.
                            </p>
                            <p className={classes.text}>
                                External track hub providers can register and submit their track databases to the
                                registry. <a href="/register">Registration</a> is web-based and done
                                on this site; submission happens programatically via our RESTful API. Once submitted and
                                successfully validated, the track dbs become available for search by other users
                                worldwide,
                                allowing for automatic and rapid integration into a genome browser.
                            </p>
                            <Button variant="contained" color="primary" href="/docs/management/overview">How To Submit</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <div className={classes.paperContent}>
                            <h1 className={classes.title}>
                                <Search className={classes.largeIcon}/> Access Data
                            </h1>
                            <p className={classes.quote}>
                                How do I find omics tracks for an assembly of my favourite organism?
                            </p>
                            <p className={classes.text}>
                                Track hubs can be searched based on metadata information. Free text <a
                                href="/docs/search">search</a> is provided from the search box in the
                                header of all track hub Registry web pages and in the middle of this page. Advanced
                                search
                                options are available for more specific and customised searches.
                            </p>
                            <Button variant="contained" color="primary" href="/docs/search/advanced">Help On Advanced Search</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <div className={classes.paperContent}>
                            <h1 className={classes.title}>
                                <Equalizer className={classes.largeIcon} y={10}/> Stats
                            </h1>
                            <p className={classes.text}>A brief summary of the data content, hover over the column for
                                exact
                                numbers.</p>
                            <Chart></Chart>
                        </div>
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
