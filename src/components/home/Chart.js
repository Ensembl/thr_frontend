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

const fakeData = [
    {name: 'Hubs', count: 100},
    {name: 'Species', count: 50},
    {name: 'Assemblies', count: 10}
];

const renderCustomBarLabel = ({payload, x, y, width, height, value}) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
};

export default function Chart() {
    return (
        <BarChart width={350} height={200} data={fakeData}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Bar dataKey="count" barSize={30} fill="#8884d8"
                 label={renderCustomBarLabel}/>
        </BarChart>
    )
}
