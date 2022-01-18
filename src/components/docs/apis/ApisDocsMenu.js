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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'white'
    },
    summary: {
        backgroundColor: theme.palette.primary.main,
        marginBottom: '20px'
    },
    item: {
        // listStyleType: 'none',
        // marginBottom: '-10px',
        // marginTop: '-10px'
    },
}));

export default function ApisDocsMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Accordion defaultExpanded style={{position: 'fixed'}}>
                <AccordionSummary
                    className={classes.summary}
                    aria-controls="current-filters-content"
                    id="current-filters-header"
                >
                    <Typography className={classes.heading}>API Docs</Typography>
                </AccordionSummary>

                {/*<AccordionDetails className={classes.item}>*/}
                {/*    <Link to="/docs/apis">Track Hub Registry APIs</Link>*/}
                {/*</AccordionDetails>*/}

                <AccordionDetails>
                    <Link to="/docs/apis" className={classes.item}>
                        Track Hub Registry APIs
                    </Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/apis#request">API Requests</HashLink>
                        </AccordionDetails>
                        <ul>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/apis#auth">Authentication</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/apis#requestheaders">Request Headers</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/apis#requestbodies">Request Bodies</HashLink>
                                </AccordionDetails>
                            </li>
                        </ul>
                        <li>
                            <AccordionDetails className={classes.item}>
                                <HashLink to="/docs/apis#response">API Responses</HashLink>
                            </AccordionDetails>
                        </li>
                    </li>
                </ul>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/api/info">Info API</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#version">GET /api/info/version</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#ping">GET /api/info/ping</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#species">GET /api/info/species</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#assemblies">GET /api/info/assemblies</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#hubassemblies">GET
                                /api/info/hubs_per_assembly/:assembly</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#tracksassemblies">GET
                                /api/info/tracks_per_assembly/:assembly</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/info#trackhubs">GET /api/info/trackhubs</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/api/registration">Registration API</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/registration#authentication">Authentication</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/registration#workflow">A Simplified RESTful workflow</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/registration/reference">API Reference</HashLink>
                        </AccordionDetails>
                        <ul>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#login">GET /api/login</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#get_trackhub">GET /api/trackhub</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#post_trackhub">POST /api/trackhub</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#get_trackhub_id">GET /api/trackhub/:id</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#delete_trackhub_id">DELETE /api/trackhub/:id</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#get_trackdb">GET /api/trackdb/:id</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#delete_trackdb">DELETE /api/trackdb/:id</HashLink>
                                </AccordionDetails>
                            </li>
                            <li>
                                <AccordionDetails className={classes.item}>
                                    <HashLink to="/docs/api/registration/reference#logout">GET /api/logout</HashLink>
                                </AccordionDetails>
                            </li>
                        </ul>
                    </li>
                </ul>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/api/search">Search API</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/search#search">POST /api/search</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/api/search#trackdb">GET /api/search/trackdb/:id</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>
            </Accordion>


        </div>
    );
}
