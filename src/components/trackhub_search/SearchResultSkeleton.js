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

import Grid from "@mui/material/Grid";
import {Skeleton, Typography} from '@mui/material';
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";

const styles = {
    summary: {
        backgroundColor: 'primary.main',
    },
    item: {
        margin: 1,
    },
    paperContent: {
        margin: "20px",
    },
};

const SearchResultSkeleton = () => {

    return (
        <>
            {/*Facets*/}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3}>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            sx={styles.summary}
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        >
                            <Skeleton variant="text" width={130} height={30}/>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={styles.item}>
                                <Skeleton variant="text" width={80} height={30}/>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            sx={styles.summary}
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        >
                            <Skeleton variant="text" width={100} height={30}/>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            sx={styles.summary}
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        >
                            <Skeleton variant="text" width={120} height={30}/>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            sx={styles.summary}
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        >
                            <Skeleton variant="text" width={60} height={30}/>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            sx={styles.summary}
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        >
                            <Skeleton variant="text" width={140} height={30}/>
                        </AccordionSummary>
                    </Accordion>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    {/*Search results*/}
                    <Skeleton variant="text" width={200} height={40}/>
                    <Skeleton variant="text" width={150} height={40}/>
                    <Skeleton variant="text" width={150} height={40} style={{float: 'right'}}/>
                    <br/><br/><br/>
                    {/*SearchPagination*/}
                    {
                        // Repeat Box 5 times
                        [...Array(5)].map((elementInArray, index) => (
                            <div>
                                <Box sx={styles.paperContent} key={index}>
                                    <Skeleton variant="text" width={140} height={40}/>
                                    <div>
                                        <Skeleton variant="text" height={30}/>
                                        <Skeleton variant="text" width={300} height={25}/>
                                        <br/>
                                        <Skeleton variant="rectangular" width={200} height={35}
                                                  style={{float: 'right'}}/>
                                        <Skeleton variant="text" width={200} height={25}/>
                                        <Skeleton variant="text" width={260} height={25}/>
                                    </div>
                                </Box>
                                <br/>
                            </div>)
                        )
                    }
                </Grid>
                {/*SearchPagination*/}
                <Skeleton variant="rectangular" width={400} height={30} style={{margin: "auto"}}/>
            </Grid>
        </>
    );
};


export default SearchResultSkeleton;