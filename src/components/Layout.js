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
import TopBar from "./generic/TopBar"
import Footer from "./generic/Footer"
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar {...props} />
            {/* Whenever Layout component is invoked {props.children} will also be displayed
            {props.children} can be Home, Login or Register (etc) component depending on the provided route */}
            <div>
                {props.children}
            </div>
            <Box mt={8}>
                <Footer />
            </Box>
        </React.Fragment>
    )
}

export default Layout