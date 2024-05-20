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

import React, {Fragment} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import NestedGrid from "./NestedGrid";
import SearchForm from "./SearchForm";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import {AlertTitle, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Alert from "@mui/material/Alert";
import Alerts from "../generic/Alerts";
import PublishIcon from "@mui/icons-material/Publish";

function Home() {

    return (
        <>
            <CssBaseline/>
            <Alerts
                messageType={'warning'}
                message={<Fragment>
                    <AlertTitle><strong>EMBL-EBI User Survey 2024</strong></AlertTitle>
                    Do data resources managed by EMBL-EBI and our collaborators make a difference to your work?
                    <strong> Please take 10 minutes to <a href="https://www.surveymonkey.com/r/HJKYKTT?channel=[webpage]"
                                                 target="_blank"
                                                 rel="noreferrer">fill in our annual user survey</a></strong>, and help us make the
                    case for why sustaining open data resources is critical for life sciences research.
                </Fragment>}
            ></Alerts>

            <Alert severity="info">
                Trackhub Registry has been redeveloped! Due to this, if you have an account you will need
                to <Link to='/forgot_password' variant="body2">reset your password </Link>
                and will be prompted to do this when you first login.
                There have been some minor essential changes to the API to improve security.
                Please check the API documentation for further information.
            </Alert>
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
                <SearchForm/>
            </Grid>
            <br/><br/>
            <NestedGrid/>
        </>
    )
}

export default Home