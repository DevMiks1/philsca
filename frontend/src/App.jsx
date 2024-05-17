/** @format */

import { AllRoutes } from "./routes/AllRoutes";
import React, { useEffect, useState } from "react";

const App = () => {
  let user = localStorage.getItem("user");
  let token = localStorage.getItem("//////");
  const [userDetails, setUserDetails] = useState(false);
  const globalUrl = process.env.REACT_APP_GLOBAL_URL;

  const removeUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("//////");
    localStorage.removeItem("receiver");
    setUserDetails(null);
  };

  // WHEN SOMEONE CHANGE THE LOCAL IT WILL AUTOMATICALLY LOGOUT
  useEffect(() => {
    const userChecking = () => {
      const user = localStorage.getItem("user");
      if (user) {
        if (user !== userDetails._id) {
          fetchData();
          setTimeout(() => {
            if (user && userDetails._id !== undefined) {
              removeUser();
              window.location.reload(false);
            }
          }, 1000);
        }
      }
    };
    window.addEventListener("storage", userChecking);
    return () => {
      window.removeEventListener("storage", userChecking);
    };
  }, []);

  const fetchData = async () => {
    const url = `${globalUrl}/useraccounts/retrieve/` + user;
    const method = "GET";
    const header = {
      "Content-Type": "application/json",
      "x-auth-token": process.env.REACT_APP_X_AUTH_TOKEN,
    };
    try {
      const response = await fetch(url, {
        method,
        headers: header,
      });
      const data = await response.json();
      if (data.message) {
        removeUser();
      } else {
        setUserDetails(data);
      }
      setTimeout(() => {
        if (token !== data.token) {
          removeUser();
        }
        if (Date.now() > Number(data.expiration)) {
          removeUser();
        }
      }, 2000);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  


  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <AllRoutes userDetails={userDetails} />
    </div>
  );
};

export default App;
