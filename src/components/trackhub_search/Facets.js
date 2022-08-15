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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrentFiltersChips from "./CurrentFiltersChips";
import BucketsList from "./BucketsList";


const styles = {
    heading: {
        color: 'white'
    },
    summary: {
        backgroundColor: 'primary.main',
    },
    item: {
        margin: 1,
    },
    chipContent: {
        marginLeft: '8px'
    },
};


export default function Facets({params, facetsFilters}) {

    const filtersNames = ['q', 'species', 'assembly', 'hub', 'type']

    return (
        <>
            <Accordion defaultExpanded>
                <AccordionSummary
                    sx={styles.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="current-filters-content"
                    id="current-filters-header"
                >
                    <Typography sx={styles.heading}>Current Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        filtersNames.map((filterName, index) => (
                            <Typography key={index} sx={styles.item}>
                                {
                                    params.get(filterName) &&
                                    <CurrentFiltersChips params={params} filter={filterName}/>
                                }
                            </Typography>
                        ))
                    }
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    sx={styles.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="species-content"
                    id="species-header"
                >
                    <Typography sx={styles.heading}>Species</Typography>
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
                    sx={styles.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="assembly-content"
                    id="assembly-header"
                >
                    <Typography sx={styles.heading}>Assembly</Typography>
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
                    sx={styles.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="hub-content"
                    id="hub-header"
                >
                    <Typography sx={styles.heading}>Hub</Typography>
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
                    sx={styles.summary}
                    expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                    aria-controls="data-type-content"
                    id="data-type-header"
                >
                    <Typography sx={styles.heading}>Data Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <BucketsList
                        params={params}
                        facetFilterInfo={facetsFilters._filter_type.type}
                        filterName={'type'}
                    />
                </AccordionDetails>
            </Accordion>
        </>
    );
}
