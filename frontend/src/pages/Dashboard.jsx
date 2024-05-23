/** @format */

import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { SideBar } from "../components/dashboard/Sidebar";
import {WindowDisplay} from "../components/dashboard/WindowDisplay"


const DashBoard = () => {
  const [tab, setTab] = useState("prelist");

  return (
    <>
      <Box
        w="100vw"
        minH="100vh"
        className="flex inset-0 fixed  overflow-auto"
        style={{ zIndex: 214 }}
      >
        {/* SIDEBAR */}
        <Box
          w={{ md: "8%", lg: "25%", xl: "20%" }}
          bg="purple.400"
          color="white"
          h="100%"
        >
          <SideBar tab={tab} setTab={setTab} />
        </Box>
        {/* RIGHT PANEL */}
        <Box

          w={{ md: "92%", lg: "75%", xl: "80%" }}
          bg="gray.50"
          
        >
          <WindowDisplay tab={tab} />
        </Box>
      </Box>
      ;
    </>
  );
};

export default DashBoard;
