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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        listStyleType: 'none',
        marginBottom: '-10px',
        marginTop: '-10px'
    },
}));

export default function ManagementDocsMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Accordion defaultExpanded style={{position: 'fixed'}}>
                <AccordionSummary
                    className={classes.summary}
                    aria-controls="current-filters-content"
                    id="current-filters-header"
                >
                    <Typography className={classes.heading}>Track Hub Management Docs</Typography>
                </AccordionSummary>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/management/overview">Overview</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/overview#registration">Client Registration</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/overview#management">Track Hub Management</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/overview#submission">The Submission Process</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/management/assembly_support">Supported Genome Assemblies</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/assembly_support#mapping">Mapping Track Hub Assembly Names to
                                INSDC Accessions</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/management/modelling">Modelling Track Hubs</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/modelling#schema">Track database schema</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>

                <AccordionDetails className={classes.item}>
                    <Link to="/docs/management/dashboard">Dashboard</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/dashboard#status">Viewing and Editing Track Hubs</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/dashboard#profile">Updating Profile</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/management/dashboard#monitoring">Automatic Track Hub
                                Monitoring</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>
            </Accordion>


        </div>
    );
}
