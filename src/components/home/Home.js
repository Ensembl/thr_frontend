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

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import NestedGrid from "./NestedGrid";
import MainSearchForm from "./MainSearchForm";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";


function Home() {

    return (
        <>
            <CssBaseline/>
            <Grid
                container
                direction="column"
                sx={{
                    padding: '50px',
                    width: '90%',
                    margin: 'auto',
                    textAlign: "center",
                }}
            >

                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 300,
                        lineHeight: '75px',
                        fontSize: '68px'
                    }}
                >
                    The Track Hub Registry
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 300,
                        margin: 4
                    }}
                >
                    A global centralised collection of publicly accessible track hubs
                </Typography>

                <Divider
                    orientation="horizontal"
                    sx={{
                        height: 1,
                        margin: 'auto',
                        width: 200,
                    }}
                />

                <Typography variant="h6" sx={{margin: 4}}>
                    The goal of the Track Hub Registry is to allow third parties to advertise <a
                    href="http://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Intro" target="_blank"
                    rel="noreferrer">track hubs</a>, and to make it easier for researchers around the world to
                    discover and use track hubs containing different types of genomic research data.
                </Typography>
                <MainSearchForm/>
            </Grid>
            <br/><br/>
            <NestedGrid/>
        </>
    )
}

export default Home