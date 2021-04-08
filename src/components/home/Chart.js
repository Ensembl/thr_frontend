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
