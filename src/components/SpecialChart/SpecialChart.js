

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones,setPhones] = useState([])
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const ph = {
                    name: parts[0],
                    value: parseInt(parts[1])
                };
                return ph;
            })
            setPhones(phoneData)
            console.log(phoneData)
        })
    },[])
    return (
      
        <div>
            <BarChart width={750} height={500} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
         <YAxis></YAxis> 
         <Tooltip/>
         <Legend/>
        </BarChart>
        </div>
    );
};

export default SpecialChart;