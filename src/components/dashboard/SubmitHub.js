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
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginTop: '30px'
    }
});

function SubmitHub() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <div className={classes.root}>
                <Typography component="h1" variant="h5">
                    Submit/Update Hub
                </Typography>
                <div>
                    <p>
                        As you are registered with the system, you can start using the <a
                        href="#">Registration API</a>, which allows you to
                        use <a href="#">RESTful workflows</a> to
                        manage your track data hubs with the Registry.
                    </p>
                    <p>Using this API, you can:</p>
                    <ul>
                        <li><a href="#">register
                            track data hubs</a> with the registry;
                        </li>
                        <li><a href="#">list</a> the all
                            your registered track hubs or data bases;
                        </li>
                        <li><a
                            href="#">get/update/delete</a> a
                            given track hub in the registry
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default SubmitHub