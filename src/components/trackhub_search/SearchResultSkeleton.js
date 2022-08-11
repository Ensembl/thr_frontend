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

import Grid from "@material-ui/core/Grid";
import {Alert, Skeleton} from "@material-ui/lab";
import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    summary: {
        backgroundColor: theme.palette.primary.main
    },
    item: {
        listStyleType: 'none',
    },
    boxDesign: {
        padding: theme.spacing(1),
        borderRadius: "5px",
        background: "white"
    },
    paperContent: {
        margin: "20px",
        fontWeight: 400,
    }
}));

const SearchResultSkeleton = () => {
    const classes = useStyles();

    return (
        <>
            <div>
                <br/>
                {/*Facets*/}
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <div className={classes.root}>
                            <Accordion defaultExpanded>
                                <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
                                    <Skeleton variant="text" width={130} height={30}/>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li className={classes.item}>
                                            <Skeleton variant="text" width={80} height={30}/>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                 <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
                                    <Skeleton variant="text" width={100} height={30}/>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                 <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
                                    <Skeleton variant="text" width={120} height={30}/>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                 <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
                                    <Skeleton variant="text" width={60} height={30}/>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                 <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
                                    <Skeleton variant="text" width={140} height={30}/>
                                </AccordionSummary>
                            </Accordion>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
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
                                    <Box className={classes.boxDesign} key={index}>
                                        <div className={classes.paperContent}>
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
                                        </div>
                                    </Box>
                                    <br/>
                                </div>)
                            )
                        }
                    </Grid>
                    {/*SearchPagination*/}
                    <Skeleton variant="rectangular" width={400} height={30} style={{ margin: "auto" }}/>
                </Grid>
            </div>
        </>
    );
};


export default SearchResultSkeleton;