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

import React, {useEffect} from "react";
import * as settings from "../../settings";
import axios from "axios";
import {Typography} from "@mui/material";
import CountUp from "react-countup";


const renderCustomBarLabel = ({payload, x, y, width, height, value}) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
};

export default function Counter() {

    const header = {'Content-Type': 'application/json'}
    const [summaryData, setSummaryData] = React.useState({})

    // Get the summary stats
    useEffect(() => {
        const apiUrlSummary = `${settings.API_SERVER}/api/stats/summary`;
        axios.get(apiUrlSummary, {headers: header})
            .then(response => {
                setSummaryData({
                    hubs: response.data[1][1],
                    species: response.data[2][1],
                    assemblies: response.data[3][1]
                })
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <>
            <Typography variant="h5" sx={{lineHeight: 2, textAlign: 'center'}}>
                <strong><CountUp end={summaryData.hubs}/></strong> Hubs <br/>
                <strong><CountUp end={summaryData.species}/></strong> Species <br/>
                <strong><CountUp end={summaryData.assemblies}/></strong> Assemblies <br/>
            </Typography>
        </>
    )
}
