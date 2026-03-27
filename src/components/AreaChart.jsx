'use client'

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

export default function Chart(){
    const data = [
        { luna: 'Ian', masini: 45 },
        { luna: 'Feb', masini: 52 },
        { luna: 'Mar', masini: 38 },
        { luna: 'Apr', masini: 65 },
        { luna: 'Mai', masini: 48 },
        { luna: 'Iun', masini: 70 },
    ];
    return(
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <YAxis/>
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
                <Area 
                    dataKey="luna" 
                    type="monotone"
                    stroke='black'
                    fill='gray'
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}