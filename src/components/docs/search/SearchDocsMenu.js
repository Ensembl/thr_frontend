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

export default function SearchDocsMenu() {
    const classes = useStyles();

    const handleClick = (event) => {
        document.querySelector('[id="filter"]').scrollIntoView();
    };

    return (
        <div className={classes.root}>

            <Accordion defaultExpanded style={{position: 'fixed'}}>
                <AccordionSummary
                    className={classes.summary}
                    aria-controls="current-filters-content"
                    id="current-filters-header"
                >
                    <Typography className={classes.heading}>Search Docs</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.item}>
                    <Link to="/docs/search">Basic Track Hub Search</Link>
                </AccordionDetails>
                <AccordionDetails className={classes.item}>
                    <Link to="/docs/search/results">Search Results Page</Link>
                </AccordionDetails>
                <ul className={classes.item}>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/search/results#filter">Filtering Results</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/search/results#status">Data Tracks Status</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/search/results#load">Loading Track Hubs into Genome Browsers</HashLink>
                        </AccordionDetails>
                    </li>
                    <li>
                        <AccordionDetails className={classes.item}>
                            <HashLink to="/docs/search/results#view">Viewing more information</HashLink>
                        </AccordionDetails>
                    </li>
                </ul>
                <AccordionDetails className={classes.item}>
                    <Link to="/docs/search/advanced">Advanced Search</Link>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
