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
import WithDataLoading from "../WithDataLoading";
import MainBreadcrumb from "../MainBreadcrumb";
import * as settings from "../../settings";
import axios from "axios";
import Tags from "./Tags";


function MainView(props) {
    const trackdb_id = parseInt(props.match.params.id)

    const [trackDbInfo, setTrackDbInfo] = useState()

    useEffect(() => {
        const apiUrlGeneralInfo = `${settings.API_SERVER}/api/trackdb/${trackdb_id}`;
        const token = localStorage.getItem('token');
        const header = {'Content-Type': 'application/json', 'Authorization': `Token ${token}`}
        axios.get(apiUrlGeneralInfo, {headers: header})
            .then(response => {
                console.log(response.data);
                setTrackDbInfo(response.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    if (trackDbInfo === undefined) {
        // TODO: Manage the non existent trackdb id
        // const message = "This trackdb doesn't exist! Please Make sure that you entered the right ID"
        return <>
            Loading...
            <WithDataLoading></WithDataLoading>
            {/*<Alerts messageType="Error" message={message}></Alerts>*/}
        </>;
    }

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

export default MainView
