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

import React, {useEffect} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {useHistory} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
    },
}));

export default function SearchPagination({params, totalEntries}) {
    const classes = useStyles();

    const [page, setPage] = React.useState(1);

    // number of items in each page
    const PAGE_SIZE = 5
    // total pages
    const count = Math.ceil(totalEntries / PAGE_SIZE)

    const pageValue = parseInt(params.get('page')) || 1

    let history = useHistory()

    const handlePageChange = (event, value) => {
        setPage(value);
        params.set('page', value);
        history.push(`/search?${params.toString()}`);
    };

    useEffect(() => {
        setPage(pageValue);
    }, [pageValue])

    return (
        <div className={classes.root}>
            <Pagination
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                shape="rounded"
                color="primary"
                onChange={handlePageChange}
            />
        </div>
    );
}
