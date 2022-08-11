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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PublishIcon from '@mui/icons-material/Publish';
import {Equalizer, Search} from "@mui/icons-material";
import Chart from "./Chart";
import {Button, Stack, Typography} from "@mui/material";

const styles = {
    paper: {
        padding: 2
    },
    quote: {
        fontSize: "19px",
        fontStyle: "italic",
    },
};

export default function NestedGrid() {

    function FormRow() {
        return (
            <>
                <Grid item xs={4}>
                    <Paper sx={styles.paper} elevation={3}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <PublishIcon/>
                            <Typography component="h5" variant="h5">
                                Submit Data
                            </Typography>
                        </Stack>

                        <br/>
                        <Typography component="p" variant="p" sx={styles.quote}>
                            I want maximum visibility for my track hubs.
                        </Typography>
                        <br/>
                        <Typography component="p" variant="p">
                            External track hub providers can register and submit their track databases to the
                            registry. <a href="/register">Registration</a> is web-based and done
                            on this site; submission happens programatically via our RESTful API. Once submitted and
                            successfully validated, the track dbs become available for search by other users
                            worldwide,
                            allowing for automatic and rapid integration into a genome browser.
                        </Typography>
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/docs/management/overview"
                        >
                            How To Submit
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={styles.paper} elevation={3}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Search/>
                            <Typography component="h5" variant="h5">
                                Access Data
                            </Typography>
                        </Stack>
                        <br/>
                        <Typography component="p" variant="p" sx={styles.quote}>
                            How do I find omics tracks for an assembly of my favourite organism?
                        </Typography>
                        <br/>
                        <Typography component="p" variant="p">
                            Track hubs can be searched based on metadata information. Free text <a
                            href="/docs/search">search</a> is provided from the search box in the
                            header of all track hub Registry web pages and in the middle of this page. Advanced
                            search options are available for more specific and customised searches.
                        </Typography>
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/docs/search/advanced"
                        >
                            Help On Advanced Search
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={styles.paper} elevation={3}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Equalizer y={10}/>
                            <Typography variant="h5">
                                Stats
                            </Typography>
                        </Stack>
                        <br/>
                        <Typography component="p" variant="p">
                            A brief summary of the data content.
                        </Typography>
                        <br/>
                        <Chart/>
                    </Paper>
                </Grid>
            </>
        );
    }

    return (
        <Grid container item xs={12} spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            <FormRow/>
        </Grid>
    );
}
