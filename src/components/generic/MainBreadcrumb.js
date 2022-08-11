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
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "10px",
        padding: "6px 12px",
        border: "1px solid #cccccc",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        fontSize: "14px",
    },
}));

export default function MainBreadcrumb(props) {
    const classes = useStyles();

    const { item } = props

    return (
        <Breadcrumbs color="primary" aria-label="breadcrumb" className={classes.root}>
            <Link color="inherit" href="/">Home</Link>
            <Typography color="textPrimary">{ item }</Typography>
        </Breadcrumbs>
    );
}
