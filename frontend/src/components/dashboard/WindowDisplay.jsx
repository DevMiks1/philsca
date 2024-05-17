/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import PreList from "./windows/PreList";
import StudIDList from "./windows/StudIDList";
import GraphsAndAnalytics from "./windows/GraphsAndAnalytics";
import Settings from "./windows/Settings";
// IMPORT COMPONENTS
;

export const WindowDisplay = ({ userDetails, tab }) => {
  const [display, setDisplay] = useState(<PreList userDetails={userDetails}/>);

  //   DISPLAY TOGGLE
  useEffect(() => {
    switch (tab) {
      case "prelist":
        setDisplay(<PreList userDetails={userDetails} />);
        break;
      case "analytics":
        setDisplay(<StudIDList userDetails={userDetails} />);
        break;
      case "inventory":
        setDisplay(<GraphsAndAnalytics userDetails={userDetails} />);
        break;
      case "employee":
        setDisplay(<Settings userDetails={userDetails} />);
        break;
    }
  }, [tab]);

  return <div className="p-5">{display}</div>;
};
