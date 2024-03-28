
import "./App.css";
import Chart from "./compoents/Chart";
import Piechart from "./compoents/Piechart";

import { Box, Flex, IconButton, Progress, useColorMode, useToast } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Dotchart from "./compoents/Dotchart.jsx";
import { useEffect, useState } from "react";
import axios from 'axios'
import BubbleChart from "./compoents/Bubblechart.jsx";
import Radarchart from "./compoents/Radar.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isdark = colorMode === "dark";
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([])
  const toast = useToast()

 useEffect(()=>{
  setLoading(true)
  axios.get(`https://blackcoffer-assignment-f8no.onrender.com/data/get`)
  .then((res)=>{
    setLoading(false)
       setData(res.data)
       console.log(res.data)
  }).catch((error)=>{
    setLoading(false)
    toast({
      title: 'Error Occoured',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  })
 },[])


  return (
    <div className="App">
      {
        loading ? <Progress size='sm' colorScheme="linkedin" isIndeterminate/> :''
      }
      
      <Box float={"right"} m="10px 20px">
        <IconButton
          icon={isdark ? <SunIcon /> : <MoonIcon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Box>
      <Chart data={data} isdark={isdark} />
      <BubbleChart  data={data} isdark={isdark}/>
      <Flex
        w={{ base: "95%", md: "80%" }}
        mx="auto"
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={{ base: "20px", md: "60px" }}
        flexWrap={"wrap"}
      >
        <Dotchart data={data} isdark={isdark} />
        <Piechart data={data} isdark={isdark} />
      </Flex>
      <Box>
        <Radarchart data={data} isdark={isdark}/>
      </Box>
    </div>
  );
}

export default App;
