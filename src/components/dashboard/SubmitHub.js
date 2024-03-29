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
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


function SubmitHub() {
    return (
        <Container component="main" maxWidth="lg">
            <Box sx={{ marginTop: 4 }}>
                <Typography component="h1" variant="h5">
                    Submit/Update Hub
                </Typography>
                <div>
                    <p>
                        As you are registered with the system, you can start using the <a
                        href="/docs/api/registration">Registration API</a>, which allows you to
                        use <a href="/docs/api/registration#workflow">RESTful workflows</a> to
                        manage your track data hubs with the Registry.
                    </p>
                    <p>Using this API, you can:</p>
                    <ul>
                        <li><a href="/docs/api/registration/workflow/thregister">register
                            track data hubs</a> with the registry;
                        </li>
                        <li><a href="/docs/api/registration/workflow/thlist">list</a> the all
                            your registered track hubs or data bases;
                        </li>
                        <li><a
                            href="/docs/api/registration/reference">get/update/delete</a> a
                            given track hub in the registry
                        </li>
                    </ul>
                </div>
            </Box>
        </Container>
    );
}

export default SubmitHub