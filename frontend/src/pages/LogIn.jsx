/** @format */

import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  useToast,
  InputRightElement,
  InputGroup,
  Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LogIn = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [intro, setIntro] = useState(
    <div className="fixed flex justify-center items-center text-center h-[100vh] w-screen z-40 bg-white dark:bg-black">
      <ThreeDots
        height={200}
        width={200}
        color="#4fa94d"
        ariaLabel="three-dots-loading"
      />
    </div>
  );

  const globalUrl = process.env.REACT_APP_GLOBAL_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  

  const signIn = async (e) => {
    setLoading(true);

    const userToSignIn = allUser.find((user) => user.email === email);

    if (userToSignIn) {
      if (
        userToSignIn.password === password &&
        userToSignIn.role === role.toLocaleLowerCase()
      ) {
        try {
          
          toast({
            title: "Successfully Login",
            status: "success",
            duration: "2000",
            isClosable: true,
            position: "bottom",
          });
          navigate("/dashboard");
          window.location.reload(false);
        } catch (error) {
          console.error("Authentication error:", error);
          toast({
            title: "Error during authentication",
            status: "error",
            duration: "2000",
            isClosable: true,
            position: "bottom",
          });
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 5000);
        }
      } else {
        toast({
          title: "Password does not match or check the role",
          status: "warning",
          duration: "4000",
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    } else {
      toast({
        title: "User not Found",
        status: "warning",
        duration: "2000",
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      signIn();
    }
  };

  useEffect(() => {
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

    fetchData();
  }, [intro]);

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <VStack spacing="5">
          <div className="w-full">
            <select
              name="TypeofHuman"
              id="TypeofHuman"
              className="mt-1 w-full rounded-md p-3 border border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-sm "
              defaultValue=""
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Please select
              </option>
              <option value="student">Student</option>
              <option value="instructor">Intructor</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <FormControl id="username" isRequired>
            <Input
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              borderColor="gray.200"
              boxShadow="sm"
              bg="gray.100"
              focusBorderColor="black"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                borderColor="gray.200"
                boxShadow="sm"
                bg="gray.100"
                focusBorderColor="black"
              />
              <InputRightElement w="4.5rem">
                <Box
                  onClick={handleShowPassword}
                  _hover={{ cursor: "pointer", color: "#3182CE" }}
                  fontSize="2xl"
                  mb={2}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Box>

                {/* <Button h="1.75rem" size="sm" onClick={handleShowPassword}>

                   
                  </Button> */}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={signIn}
            isLoading={loading}
          >
            Log In
          </Button>
        </VStack>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default LogIn;
