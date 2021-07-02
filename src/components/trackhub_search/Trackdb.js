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
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import TrackdbStatusChip from "../dashboard/TrackdbStatusChip";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        borderRadius: 10,
        borderColor: "#F00",
    },
    paperContent: {
        margin: "20px",
        fontWeight: 400,
    },
    PanelTitle: {
        // fontWeight: 500,
        marginBottom: "10px"
    },
    PanelContent: {
        lineHeight: "2em"
    },
    chipContent: {
        marginLeft: "8px"
    },
    trackStatus: {
        float: "right",
        fontSize: "12px",
        borderRadius: "0px"
    },
    divider: {
        marginBottom: "15px"
    },
    shortDivider: {
        margin: 'auto',
        marginTop: '15px',
        width: 200,
    },
    largeIcon: {
        marginBottom: "-7px"
    },
    stautsInfo: {
        float: "right",
        display: "flex",
        marginTop: "-50px"
    }
}));

const Trackdb = ({trackdb}) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper} elevation={2}>
                <div className={classes.paperContent}>
                    <h3 className={classes.PanelTitle}>
                        <Link to={`/trackhub_view/${trackdb.trackdb_id}`} target={'_blank'}>
                            {trackdb.hub.short_label}
                        </Link>
                    </h3>
                    <div className={classes.PanelContent}>
                        <div>
                            {trackdb.hub.long_label}
                        </div>
                        <br/>
                        <div>
                            <strong>Species:</strong> {trackdb.species.taxon_id} - {trackdb.species.scientific_name}
                            <br/>
                            <strong>Assembly:</strong> {trackdb.assembly.accession} - {trackdb.assembly.name}
                        </div>
                        <div className={classes.stautsInfo}>
                            <TrackdbStatusChip trackdbStatus={trackdb.status.message} ></TrackdbStatusChip>
                            <Button
                                className={classes.chipContent}
                                size="small"
                                variant="outlined"
                                href={`/trackhub_view/${trackdb.trackdb_id}`}
                                target="_blank"
                                color="default"
                            >View Info
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
            <br/>
        </>
    );
};


export default Trackdb;