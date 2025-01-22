'use client';

import {LineChart,Line,XAxis,YAxis,CartesianGrid,ResponsiveContainer} from 'recharts';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import data from '@/data/analytics';

const AnalyticsChart = () => {
    return ( 
       <>
       <Card>
           <CardHeader>
               <CardTitle>Analytics For This Year</CardTitle>
           </CardHeader>
           <CardContent>
            
               <ResponsiveContainer width="100%" aspect={4/1}>
                   <LineChart data={data} width={1100} height={300}>
                       <XAxis dataKey="name"/>
                       <YAxis/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r:8}}/> */}
                       <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{r:8}}/>
                   </LineChart>
               </ResponsiveContainer>
            
           </CardContent>
           <CardFooter>
               <CardDescription>Analytics for the past 6 months</CardDescription>
           </CardFooter>
         </Card>
         </>
     );
}
 
export default AnalyticsChart;