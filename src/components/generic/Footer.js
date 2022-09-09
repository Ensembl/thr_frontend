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

import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Box, Container, Grid, Stack} from "@mui/material";
import * as settings from "../../settings";
import axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function Footer() {

    const [pingStatus, setPingStatus] = useState()
    const [apiVersion, setApiVersion] = useState()

    useEffect(() => {
        const pingStatusUrl = `${settings.API_SERVER}/api/info/ping`;
        const header = {'Content-Type': 'application/json'}
        axios.get(pingStatusUrl, {headers: header})
            .then(response => {
                setPingStatus(response.data.ping)
            })
            .catch(err => {
                setPingStatus(0)
            });

        const apiVersionUrl = `${settings.API_SERVER}/api/info/version`;
        axios.get(apiVersionUrl, {headers: header})
            .then(response => {
                setApiVersion(response.data.version)
            })
            .catch(err => {
                setApiVersion("Unknown")
            });
    }, [])

    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{flexGrow: 1, display: "flex"}}>
                    <Stack direction="row" alignItems="center" gap={0.5} sx={{flexGrow: 1}}>
                        <Typography variant="body2"><i>Status:</i></Typography>
                        {
                            pingStatus ?
                                <CheckCircleIcon color="success" fontSize="inherit"/>
                                :
                                <CancelIcon color="error" fontSize="inherit"/>
                        }
                    </Stack>
                    <Typography variant="body2">
                        <i>
                            API v{apiVersion}
                            ,
                            UI v{process.env.REACT_APP_VERSION}
                        </i>
                    </Typography>
                </Box>
                <br/>
                <Box>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="http://www.ebi.ac.uk/">
                            EMBL-EBI
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </>

    );
}

export default Footer