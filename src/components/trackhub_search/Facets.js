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
import CurrentFiltersChips from "./CurrentFiltersChips";
import BucketsList from "./BucketsList";

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
        backgroundColor: theme.palette.primary.main
    },
    item: {
        listStyleType: 'none',
    },
    chipContent: {
        marginLeft: '8px'
    },
}));

export default function Facets({params, facetsFilters}) {
    const classes = useStyles();

    const filtersNames = ['q', 'species', 'assembly', 'hub', 'type']

    return (
        <div className={classes.root}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="current-filters-content"
                    id="current-filters-header"
                >
                    <Typography className={classes.heading}>Current Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {
                            filtersNames.map((filterName, index) => (
                                <li key={index} className={classes.item}>
                                    {
                                        params.get(filterName) &&
                                        <CurrentFiltersChips params={params} filter={filterName}/>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="species-content"
                    id="species-header"
                >
                    <Typography className={classes.heading}>Species</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BucketsList
                        params={params}
                        facetFilterInfo={facetsFilters._filter_species.species}
                        filterName={'species'}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="assembly-content"
                    id="assembly-header"
                >
                    <Typography className={classes.heading}>Assembly</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BucketsList
                        params={params}
                        facetFilterInfo={facetsFilters._filter_assembly.assembly}
                        filterName={'assembly'}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="hub-content"
                    id="hub-header"
                >
                    <Typography className={classes.heading}>Hub</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BucketsList
                        params={params}
                        facetFilterInfo={facetsFilters._filter_hub.hub}
                        filterName={'hub'}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="data-type-content"
                    id="data-type-header"
                >
                    <Typography className={classes.heading}>Data Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BucketsList
                        params={params}
                        facetFilterInfo={facetsFilters._filter_type.type}
                        filterName={'type'}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
