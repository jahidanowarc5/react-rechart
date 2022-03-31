
import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'SupplierA',
          price: 4000,
          seller: 2400,
          amt: 2400,
        },
        {
          name: 'SupplierB',
          price: 3000,
          seller: 1398,
          amt: 2210,
        },
        {
          name: 'SupplierC',
          price: 2000,
          seller: 9800,
          amt: 2290,
        },
        {
          name: 'SupplierD',
          price: 2780,
          seller: 3908,
          amt: 2000,
        },
        {
          name: 'SupplierE',
          price: 1890,
          seller: 4800,
          amt: 2181,
        },
        {
          name: 'SupplierF',
          price: 2390,
          seller: 3800,
          amt: 2500,
        },
        {
          name: 'SupplierG',
          price: 3490,
          seller: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <LineChart width={750} height={500} data={data}>
         <Line dataKey="price"></Line>  
         <Line dataKey="seller"></Line> 
         <XAxis dataKey="name"></XAxis>
         <YAxis></YAxis> 
         <Tooltip/>
         <Legend/>


        </LineChart>
    );
};

export default MyLineChart;