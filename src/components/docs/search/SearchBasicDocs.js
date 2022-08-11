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
import SearchDocsMenu from "./SearchDocsMenu";
import {Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from "@mui/material/CssBaseline";
import MainBreadcrumb from "../../generic/MainBreadcrumb";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '-30px',
        display: 'flex',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'white'
    },
    summary: {
        backgroundColor: theme.palette.primary.main
    },
    item: {
        listStyleType: 'none',
    },
    chipContent: {
        marginLeft: '8px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const SearchBasicDocs = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <SearchDocsMenu/>
                <main className={classes.content}>
                    <MainBreadcrumb item="Search"/>
                    <br/>

                    <Typography component="h1" variant="h4">
                        Basic Track Hub Search
                    </Typography>
                    <p>
                        Full text search is provided from the search box in the header of all Track Hub Registry web
                        pages and on the home page. Enter search terms within the search input box and hit enter or
                        click on the spy glass icon. A search term can be a single word or a phrase surrounded by
                        double quotes, which searches for all the words in the phrase, in the same order.
                    </p>
                    <p>
                        When querying using multiple terms, by default the search application uses the logical
                        operator OR, so entering <a href="/search?q=GRCm38+mouse">GRCm38
                        mouse</a> into the search box actually translates to GRCm38 OR mouse which will find any
                        document that contains one or more of GRCm38 or mouse: some of the results will contain
                        GRCm38, some will contain mouse and others may contain both, with results of the latter case
                        being ranked at the top.
                    </p>
                    <p>
                        Read about the <a href="/docs/search/results">search results page</a> to
                        learn how to filter search results according to different criteria and know how matching
                        track hubs are displayed and how they can be loaded for display in genome browsers.
                    </p>
                    <p>
                        See <a href="/docs/search/advanced">Advanced Search</a> for more specific
                        and customised searches using complex queries in the search box.
                    </p>
                </main>
            </div>
        </>
    );
};


export default SearchBasicDocs;