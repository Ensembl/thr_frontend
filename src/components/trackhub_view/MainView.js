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

import React, {useEffect, useState} from 'react';
import TrackHubPanels from "./TrackHubPanels";
import MainBreadcrumb from "../generic/MainBreadcrumb";
import * as settings from "../../settings";
import axios from "axios";
import Tags from "./Tags";
import { Alert } from '@mui/material';
import {Link} from "react-router-dom";
import {ArrowBack} from "@mui/icons-material";
import MainViewSkeleton from "./MainViewSkeleton";


function MainView(props) {
    const trackdb_id = parseInt(props.match.params.id)

    const [trackDbInfo, setTrackDbInfo] = useState()
    const [httpStatusCode, setHttpStatusCode] = React.useState();

    useEffect(() => {
        const apiUrlGeneralInfo = `${settings.API_SERVER}/api/trackdb/${trackdb_id}`;
        const header = {'Content-Type': 'application/json'}
        axios.get(apiUrlGeneralInfo, {headers: header})
            .then(response => {
                setHttpStatusCode(response.status)
                setTrackDbInfo(response.data);
            })
            .catch(err => {
                setHttpStatusCode(err.response.status)
            });
    }, [trackdb_id])

    if (httpStatusCode === 404) {
        return <Alert severity="error" >
            This trackdb doesn't exist! <br/><br/>
            <Link to='/'> <ArrowBack fontSize="inherit"/> Go back to the home page</Link>
        </Alert>
    }
    if (httpStatusCode === 500) {
        return <Alert severity="error" >
            Internal server error! <br/><br/>
            <Link to='/'> <ArrowBack fontSize="inherit"/> Go back to the home page</Link>
        </Alert>
    }
    else if (httpStatusCode === 200 && trackDbInfo !== undefined) {
        return (
            <div>
                <MainBreadcrumb item={trackDbInfo.hub.name + ' - ' + trackDbInfo.assembly.accession}/><br/>
                <Tags
                    hubName={trackDbInfo.hub.name}
                    speciesScientificName={trackDbInfo.species.scientific_name}
                    assemblyAccession={trackDbInfo.assembly.accession}
                />
                <TrackHubPanels trackDbInfo={trackDbInfo}/>
            </div>
        );
    }
    else {
        return <>
            <MainViewSkeleton />
        </>;
    }
}

export default MainView
