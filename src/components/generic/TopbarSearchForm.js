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

import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Redirect, useHistory} from "react-router-dom";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/material/FormHelperText";
import AddAssemblyMapping from "../dashboard/AddAssemblyMapping";
import {LinearProgress} from "@mui/material";


const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
    },
    input: {
        marginLeft: 1,
        flex: 1,
    },
    iconButton: {
        padding: 1,
    },
};


const TopbarSearchForm = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const handleTopBarSearch = (event) => {
        // Something tricky is happening here, I fixed the bug using pure Javascript
        // however I'll need to get back to this later (PR#39, PR#40)
        // use History cannot be used here because Topbar isn't in the Router
        // https://cucumbersome.net/2021/01/17/react-router-history-is-not-defined/
        if (searchValue) {
            return window.location.href = '/search?q=' + searchValue;
        } else {
            return window.location.href = '/search';
        }
        // if (event.key === 'Enter') {
        //     console.log("event.key === 'Enter'")
        //     return window.location.href = '/search?q=' + searchValue;
        // }
    }

    return <>
        <Paper component="form" sx={styles.root}>
            <InputBase
                sx={styles.input}
                placeholder="Search by keywords: hg19, epigenomics, mouse ..."
                inputProps={{'aria-label': 'Search by keywords: hg19, epigenomics, mouse ...'}}
                value={searchValue}
                onChange={handleSearchInputChanges}
                // onKeyPress={event => event.key === 'Enter' && handleTopBarSearch}
                onKeyPress={handleTopBarSearch}
                name='q'
            />
            <IconButton
                type="submit"
                onClick={handleTopBarSearch}
                to="/search"
                sx={styles.iconButton}
                aria-label="search"
                size="large">
                <SearchIcon/>
            </IconButton>
        </Paper>
    </>;
}

export default TopbarSearchForm;
