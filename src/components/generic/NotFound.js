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
import {Link} from "react-router-dom";
import {ArrowBack} from "@material-ui/icons";
import {Alert} from "@material-ui/lab";


function NotFound() {
    return (
        <Alert severity="error">
            Page not found! <br/><br/>
            <Link to='/'> <ArrowBack fontSize="inherit"/> Go back to the home page</Link>
        </Alert>
    );
}

export default NotFound