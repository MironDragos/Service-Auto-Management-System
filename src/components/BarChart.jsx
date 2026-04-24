import { 
    BarChart, 
    Bar, 
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip
} from 'recharts'

export default function Chart({ data }){
    const cars = data.count;
    return(
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <YAxis />
                <XAxis dataKey="date"/>
                <CartesianGrid strokeDasharray="5 5"/>

                <Legend/>
                <Tooltip/>

                <Bar 
                    dataKey="cars"
                    type="monotone"
                    stroke='black'
                    fill='gray'
                    stackId='1'
                />
            </BarChart>
        </ResponsiveContainer>
    )
}