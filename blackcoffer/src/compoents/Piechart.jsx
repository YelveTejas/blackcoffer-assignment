import { Box, Heading, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Pie, PolarArea } from "react-chartjs-2";

const formatChartData = (data) => {
  const labels = data.map((item) => item.insight);

  const values = data.map((item) => item.relevance);
  const backgroundColors = [
    "rgba(75, 192, 192, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 205, 86, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    // Add more colors as needed
  ];
  return {
    label: labels,
    datasets: [
      {
        label: "Relevance",
        backgroundColor: backgroundColors.slice(0, values.length),
      //  borderColor:'none',
        data: values,
      },
    ],
  };
};
const Piechart = ({ data, isdark }) => {
  const [filter, setFilter] = useState("all");
  const filteredData =
    filter === "All" ? data : data.filter((item) => item.sector === filter);
  const chartdata = formatChartData(filteredData, isdark);
  const options = {
    scales: {
      x: {
        type: "category",
        label: chartdata.label,
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isdark ? "#fff" : "black", // Change the color of the x axis ticks
        }, // Adjust based on your data
      },
    },
  };
  return (
    <Box w={{base:"full",md:"40%"}} >
      <Heading as="h3" size={"lg"} mb="10px">
        Relevance Chart
      </Heading>
      <Box mb="10px">
        <Select
          
          id="filterSelect"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Energy">Energy</option>
          <option value="Government">Government</option>
          <option value="Retail">Retail</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Manufacturing">Manufacturing</option>
        </Select>
      </Box>
      <Box >
        <PolarArea data={chartdata} options={options} />
      </Box>
    </Box>
  );
};

export default Piechart;
