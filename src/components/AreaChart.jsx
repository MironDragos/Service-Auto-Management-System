import { 
    AreaChart, 
    Area, 
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip
} from 'recharts'

export default function Chart({data}){
    return(
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <YAxis />
                <XAxis dataKey='luna'/>
                <CartesianGrid strokeDasharray="5 5"/>

                <Legend/>
                <Tooltip/>

                <Area 
                    dataKey="masini" 
                    type="monotone"
                    stroke='black'
                    fill='gray'
                    stackId='1'
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}