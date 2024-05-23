/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import PreList from "./windows/PreList";
import StudIDList from "./windows/StudIDList";
import GraphsAndAnalytics from "./windows/GraphsAndAnalytics";
import Settings from "./windows/Settings";
import GenerateAccount from "./windows/GenerateAccount";
// IMPORT COMPONENTS
;

export const WindowDisplay = ({ tab }) => {
  const [display, setDisplay] = useState(<PreList/>);

  //   DISPLAY TOGGLE
  useEffect(() => {
    switch (tab) {
      case "prelist":
        setDisplay(<PreList />);
        break;
      case "studlistid":
        setDisplay(<StudIDList />);
        break;
        case "generateaccount":
          setDisplay(<GenerateAccount />);
          break;  
      case "graphsandanalytics":
        setDisplay(<GraphsAndAnalytics />);
        break;
      case "settings":
        setDisplay(<Settings />);
        break;
    }
  }, [tab]);

  return <div className="h-full">{display}</div>;
};
