/** @format */

import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { SideBar } from "../components/dashboard/Sidebar";
import { WindowDisplay } from "../components/dashboard/WindowDisplay";
const DashBoard = ({userDetails}) => {
  const [tab, setTab] = useState("prelist");

  return (
    <>
      <Box
        w="100vw"
        minH="100vh"
        className="flex inset-0 fixed  overflow-auto bg-gray-900"
        style={{ zIndex: 214 }}
      >
        {/* SIDEBAR */}
        <Box
          w={{ md: "8%", lg: "25%", xl: "20%" }}
          className="bg-gray-800 text-white"
        >
          <SideBar tab={tab} setTab={setTab} userDetails={userDetails.userDetails}/>
        </Box>
        {/* RIGHT PANEL */}
        <Box
          w={{ md: "92%", lg: "75%", xl: "80%" }}
          className="bg-gray-900 text-white"
        >
          <WindowDisplay tab={tab} userDetails={userDetails.userDetails}/>
        </Box>
      </Box>
      ;
    </>
  );
};

export default DashBoard;
