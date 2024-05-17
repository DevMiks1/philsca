import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";



import { useEffect, useState } from "react";
import DashBoard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
;

// IMPORT JSFORMAT
// import { MunicipalityDetails } from "../components/JSFormat/Municipality"
export const AllRoutes = (userDetails) => {
  const [allUser, setAllUser] = useState([]);

  const userToSignIn = allUser.find((user) => user.email === email)
  const fetchData = async () => {
    try {
      const header = {
        "Content-Type": "application/json",
        "x-auth-token": process.env.REACT_APP_X_AUTH_TOKEN,
      };

      const response = await axios.get(`${globalUrl}/accounts/retrieveAll`, {
        headers: header,
      });

      setAllUser(response.data);
      setTimeout(() => {
        setIntro(<></>);
      }, 2000);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setIntro(
        <div className="fixed flex justify-center items-center text-center h-[100vh] w-screen z-40 text-3xl bg-white dark:bg-black">
          Please Reload Page...
        </div>
      );
    }
  };
  const user = localStorage.getItem("user");

  let authentication;
  let signInAuthentication;
  
  if (!user) {
    signInAuthentication = <Route path="/" element={<LogIn />}></Route>;
  } else {
    signInAuthentication = (
      <Route path="/" element={<Navigate to="/dashboard" />} />
    );
  }

  if (user) {
    authentication = (
      <>
        
        
        <Route
          path="/dashboard"
          element={<DashBoard userDetails={userDetails} />}
        ></Route>
      </>
    );
  } else {
    authentication = (
      <>
        <Route
          path="/dashboard"
          userDetails={userDetails.userDetails}
          element={<Navigate to="/" />}
        />
      </>
    );
  }
  return (
    <div className="dark:bg-black dark:text-white">
   
        <Routes >
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          
          
          {/* <Route path="*" element={<PageNotFound />}></Route> */}
        </Routes>
     
    </div>
  );
};
