import React, { useState } from 'react'
import { charData } from '../data/data.js'
import {Bar, Bubble, Doughnut, Line, Radar}  from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { Box, Flex, Heading, Select } from '@chakra-ui/react'


const formatChartData=(data , isdark)=>{
  
    const labels = data.map(item=>item.country)
    const relevance =  data.map(item=>item.relevance)
    const values = data.map(item=>item.likelihood)
    return {
        label:labels,
        datasets:[
            {
                label:'Likelihood',
                backgroundColor: isdark ? 'rgba(75, 192, 192, 1)' : 'rgba(75, 192, 192, 0.5)',
                borderColor: isdark ? 'rgba(75, 192, 192, 1)' : 'rgba(75, 192, 192, 0.5)',
                
                data: values
            },
            {
              label:'Relevance',
              backgroundColor: isdark ? 'rgba(500, 200, 200, 1)' : 'rgba(500, 200, 200, 0.5)',
              borderColor: isdark ? 'rgba(75, 200, 192, 1)' : 'rgba(75, 200, 192, 0.5)',
              data: relevance
          }
        ]
    }
}
const Chart = ({data, isdark}) => {
    const [filter,setFilter] = useState('all')
    const filteredData = filter === 'All' ? data : data.filter(item => item.sector === filter);
   const chartdata = formatChartData(filteredData ,isdark)
  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeInCubic',
        from: 1,
        to: 0,
        loop:false,
        color:'red',
      }
    },
    scales: {
      x: {
        type: 'category',
        labels: chartdata.label,
        ticks: {
          color: isdark ? '#fff':'black', // Change the color of the x axis ticks
        },// A
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isdark ? '#fff':'black', // Change the color of the x axis ticks
        },// AAdjust based on your data
      },
    },
  };
  return (
    <Box  p='10px' >
      <Heading as='h3' size='lg'>Gas Consumption Intensity Chart</Heading>
      <div>
           
            <Select  id='filterSelect' value={filter} w={{base:"60%",md:"30%"}} onChange={(e)=>setFilter(e.target.value)}>
                <option value='All'>All</option>
                <option value='Energy'>Energy</option>
                <option value='Government'>Government</option>
                <option value='Retail'>Retail</option>
                <option value='Information Technology'>Information Technology</option>
                <option value='Manufacturing'>Manufacturing</option>
            </Select>
        </div>
        <Flex h={{base:"auto",md:"500px"}}  justifyContent={'center'} mt='20px'> 
        <Bar
          data={chartdata}
         options={options}
      />
        </Flex>
      
      
     
    </Box>
  )
}

export default Chart