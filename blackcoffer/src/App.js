import logo from "./logo.svg";
import "./App.css";
import Chart from "./compoents/Chart";
import Piechart from "./compoents/Piechart";
import { charData } from "./data/data.js";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Dotchart from "./compoents/Dotchart.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isdark = colorMode === "dark";
  return (
    <div className="App">
      <Box float={"right"} m="10px 20px">
        <IconButton
          icon={isdark ? <SunIcon /> : <MoonIcon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Box>
      <Chart data={charData} isdark={isdark} />
      <Flex
        w={{ base: "95%", md: "80%" }}
        mx="auto"
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={{ base: "20px", md: "40px" }}
        flexWrap={"wrap"}
      >
        <Dotchart data={charData} isdark={isdark} />
        <Piechart data={charData} isdark={isdark} />
      </Flex>
    </div>
  );
}

export default App;
