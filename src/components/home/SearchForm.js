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
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        // width: '70%',
        marginRight: '20px',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));


const SearchForm = () => {
    const classes = useStyles();

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const history = useHistory()

    const handleSearch = () => {
        if(searchValue){
            history.push(`/search?q=${searchValue}`)
        } else {
            history.push(`/search`)
        }
    }

    return (
        <>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search by keywords: hg19, epigenomics, mouse ..."
                    inputProps={{'aria-label': 'Search by keywords: hg19, epigenomics, mouse ...'}}
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    name={'q'}
                />
                <IconButton type="submit" onClick={handleSearch} className={classes.iconButton} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </>

    );
}

export default SearchForm;
