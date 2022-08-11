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
import SearchForm from "./SearchForm";
import Divider from "@mui/material/Divider";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '50px',
        paddingTop: '5px',
        alignItems: 'center',
        width: '90%',
        marginTop: '30px',
        margin: 'auto',
        textAlign: "center",
        backgroundColor: "white"
    },
    title: {
        fontWeight: 300,
        lineHeight: '75px',
        fontSize: '68px'
    },
    subtitle: {
        fontWeight: 300,
        lineHeight: '29px',
        fontSize: '26px'
    },
    description: {
        fontWeight: 300,
        lineHeight: '26px',
        fontSize: '18px'
    },
    divider: {
        height: 1,
        margin: 'auto',
        width: 200,
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <div>
                <div className={classes.main}>
                    <h1 className={classes.title}>The Track Hub Registry</h1>
                    <h3 className={classes.subtitle}>A global centralised collection of publicly accessible track
                        hubs</h3>

                    <Divider className={classes.divider} orientation="horizontal"/>

                    <p className={classes.description}>
                        The goal of the Track Hub Registry is to allow third parties to advertise <a
                        href="http://genome.ucsc.edu/goldenPath/help/hgTrackHubHelp.html#Intro" target="_blank" rel="noreferrer">track
                        hubs</a>, and to make it easier for researchers around the world to discover and use track
                        hubs
                        containing different types of genomic research data.
                    </p>
                    <SearchForm/>
                </div>
                <br/>
                <br/>
                <NestedGrid/>
            </div>
        </React.Fragment>
    )
}

export default Home