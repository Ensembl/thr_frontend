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

import React, {useState, useEffect} from 'react';
import Trackdb from './Trackdb';
import axios from "axios";
import * as settings from "../../settings";
import Grid from "@material-ui/core/Grid";
import Facets from "./Facets";
import SearchPagination from "./SearchPagination";

const SearchResult = ({location}) => {

    const urlParams = location.search
    const params = new URLSearchParams(urlParams)

    const currentFilters = {
        'query': params.get('q'),
        'species': params.get('species'),
        'hub': params.get('hub'),
        'assembly': params.get('assembly'),
        'type': params.get('type'),
        'page': params.get('page') || 1,
    }

    const [loading, setLoading] = useState(true);
    const [trackdbs, setTrackdbs] = useState([]);
    const [facets, setFacets] = useState([]);
    const [totalEntries, setTotalEntries] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.post(`${settings.API_SERVER}/api/search/?page=${currentFilters.page}`, currentFilters, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(response => {
                setTrackdbs(response.data.items);
                setFacets(response.data.facets)
                setTotalEntries(response.data.total_entries)
                setLoading(false);
            })
            .catch(err => {
                setErrorMessage(err.toString());
                setLoading(false);
            });
    }, [
        currentFilters.query,
        currentFilters.species,
        currentFilters.assembly,
        currentFilters.hub,
        currentFilters.type,
        currentFilters.page
    ]);

    return (
        <>
            <div>
                <br/>
                {
                    loading && !errorMessage ? (
                        <span>loading...</span>
                    ) : errorMessage ? (
                        <h2>{errorMessage}</h2>
                    ) : !totalEntries ? (
                        <h1>No results! Try with another query.</h1>
                    ) : (
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <h1>Filters</h1>
                                <Facets params={params} facetsFilters={facets}></Facets>
                            </Grid>
                            <Grid item xs={9}>
                                <h1>Search results</h1>
                                <h4>{totalEntries} Result(s)</h4>
                                {
                                    trackdbs.map((trackdb, index) => (
                                        <Trackdb key={trackdb.trackdb_id} trackdb={trackdb}/>
                                    ))
                                }
                            </Grid>
                            <SearchPagination params={params} totalEntries={totalEntries}/>
                        </Grid>
                    )
                }
            </div>
        </>
    );
};


export default SearchResult;