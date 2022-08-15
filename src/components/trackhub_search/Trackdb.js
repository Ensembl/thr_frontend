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

import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import TrackdbStatusChip from "../dashboard/TrackdbStatusChip";
import Box from "@mui/material/Box";
import {Typography, useTheme} from "@mui/material";
import InnerHTML from "dangerously-set-html-content";
import Grid from "@mui/material/Grid";

const styles = {
    boxDesign: {
        borderRadius: "5px",
    },
    paperContent: {
        margin: "20px",
    },
    PanelContent: {
        lineHeight: "2em"
    },
    chipContent: {
        marginLeft: 1,
    },
    stautsInfo: {
        float: "right",
        display: "flex",
        marginTop: -5
    }
};

const Trackdb = ({trackdb}) => {

    // We can access the theme variables inside your functional React components using the useTheme hook
    const theme = useTheme();
    let currentTrackdbStatus = trackdb.status.message
    let BoxBorderColor;

    // Change border color based on the trackdb status
    if (currentTrackdbStatus === "" || currentTrackdbStatus === undefined) {
        BoxBorderColor = theme.palette.default.main
    } else if (currentTrackdbStatus === 'All is Well') {
        BoxBorderColor = theme.palette.success.main
    } else if (currentTrackdbStatus === "Remote Data Unavailable") {
        BoxBorderColor = theme.palette.error.main
    }

    return <>
        <Box sx={styles.boxDesign} border={1} borderColor={BoxBorderColor}>
            <Box sx={styles.paperContent}>
                <Typography component="h3" variant="h6">
                    <Link to={`/search/trackhub_view/${trackdb.trackdb_id}`} target={'_blank'} rel="noreferrer">
                        <InnerHTML html={trackdb.hub.short_label}/>
                    </Link>
                </Typography>
                <Box sx={styles.PanelContent}>
                    {/* Fix HTML tags not being rendered properly*/}
                    <InnerHTML html={trackdb.hub.long_label}/>
                    <br/>
                </Box>
                <Grid item xs={6} sm={6} md={12}>
                    <strong>Species:</strong> {trackdb.species.taxon_id} - {trackdb.species.scientific_name}
                    <br/>
                    <strong>Assembly:</strong> {trackdb.assembly.accession} - {trackdb.assembly.name}
                </Grid>

                <Grid item sx={styles.stautsInfo} xs={6} sm={6} md={12}>
                    {
                        trackdb.status ?
                            <TrackdbStatusChip trackdbStatus={currentTrackdbStatus}></TrackdbStatusChip>
                            :
                            <TrackdbStatusChip trackdbStatus=""></TrackdbStatusChip>
                    }
                    <Button
                        sx={styles.chipContent}
                        size="small"
                        variant="outlined"
                        href={`/search/trackhub_view/${trackdb.trackdb_id}`}
                        target="_blank"
                        rel="noreferrer">View Info
                    </Button>
                </Grid>
            </Box>
        </Box>
        <br/>
    </>;
};


export default Trackdb;