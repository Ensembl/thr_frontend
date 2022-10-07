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
import {useHistory} from "react-router-dom";


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


const MainSearchForm = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const history = useHistory();

    const handleMainSearch = () => {
        if(searchValue){
            history.push(`/search?q=${searchValue}`);
        } else {
            history.push(`/search`);
        }
    }

    return <>
        <Paper component="form" sx={styles.root}>
            <InputBase
                sx={styles.input}
                placeholder="Search by keywords: hg19, epigenomics, mouse ..."
                inputProps={{'aria-label': 'Search by keywords: hg19, epigenomics, mouse ...'}}
                value={searchValue}
                onChange={handleSearchInputChanges}
                name={'q'}
            />
            <IconButton
                type="submit"
                onClick={handleMainSearch}
                sx={styles.iconButton}
                aria-label="search"
                size="large">
                <SearchIcon/>
            </IconButton>
        </Paper>
    </>;
}

export default MainSearchForm;
