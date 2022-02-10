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

import {BarChart, Bar, XAxis, YAxis} from 'recharts';
import React, {useEffect} from "react";
import * as settings from "../../settings";
import axios from "axios";


const renderCustomBarLabel = ({payload, x, y, width, height, value}) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
};

export default function Chart() {

    const header = {'Content-Type': 'application/json'}
    const [summaryData, setSummaryData] = React.useState([])

    // Get the summary stats
    useEffect(() => {
        const apiUrlSummary = `${settings.API_SERVER}/api/stats/summary`;
        axios.get(apiUrlSummary, {headers: header})
            .then(response => {
                setSummaryData([
                    {name: 'Hubs', count: response.data[1][1]},
                    {name: 'Species', count: response.data[2][1]},
                    {name: 'Assemblies', count: response.data[3][1]}
                ])
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <BarChart width={350} height={200} data={summaryData}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Bar dataKey="count" barSize={30} fill="#8884d8"
                 label={renderCustomBarLabel}/>
        </BarChart>
    )
}
