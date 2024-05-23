import { Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, Text, VStack, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import {
  FaUser,
  FaChartBar,
  FaBox,
  FaUsers,
  FaHeadset,
  FaShoppingCart,
  FaUserFriends,
} from "react-icons/fa";
import {FiMenu , FiMessageSquare } from 'react-icons/fi';
import { Link } from "react-router-dom";

export const SideBar = ({ setTab, tab }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sideBarClose = () => {
    onClose();
  }

  const menu = 
    <>
      <Link onClick={(e) => {setTab("prelist"); onClose()}} >
        <Flex 
          align="center"
          gap={2}
          backgroundColor={tab === "prelist" ? "gray.600" : ""}
          borderRadius={5}
          px={2}
          py={2}
          mb={2}       
          _hover={{
            bg : "gray.600",
            borderRadius : "5"
          }}>
            <Icon  as={FaUser}/>
              <Text as="p">Pre List</Text>
              </Flex>  
      </Link>

      <Link onClick={(e) => {setTab("studlistid") ; ; onClose()}}>
        <Flex 
          align="center" 
          gap={2}
          backgroundColor={tab === "studlistid" ? "gray.600" : ""}
          borderRadius={5}
          px={2}
          py={2}
          mb={2}
          _hover={{
          bg : "gray.600",
          borderRadius : "5"
          }}>
          <Icon as={FaChartBar}/>
          <Text as="p">Student ID List</Text>
        </Flex>  
      </Link>

      <Link onClick={(e) => {setTab("graphsandanalytics") ; ; onClose()}}>
        <Flex 
          align="center" 
          gap={2}
          backgroundColor={tab === "graphsandanalytics" ? "gray.600" : ""}
          borderRadius={5}
          px={2}
          py={2}
          mb={2}
          _hover={{
          bg : "gray.600",
          borderRadius : "5"
          }}>
          <Icon as={FaBox} />
          <Text>Graphs&Analytics</Text>
        </Flex>
      </Link>

      <Link onClick={(e) => {setTab("generateaccount") ; ; onClose()}}>
        <Flex 
          align="center" 
          gap={2}
          backgroundColor={tab === "generateaccount" ? "gray.600" : ""}
          borderRadius={5}
          px={2}
          py={2}
          mb={2}
          _hover={{
          bg : "gray.600",
          borderRadius : "5"
          }}>
          <Icon as={FaBox} />
          <Text>Generate Account</Text>
        </Flex>
      </Link>

      <Link onClick={(e) => {setTab("settings") ; ; onClose()}}>
        <Flex 
          align="center" 
          gap={2}
          backgroundColor={tab === "settings" ? "gray.600" : ""}
          borderRadius={5}
          px={2}
          py={2}
          mb={2}
          _hover={{
          bg : "gray.600",
          borderRadius : "5"
          }}>
          <Icon as={FaUsers} />
          <Text>Settings</Text>
        </Flex>
      </Link>

           
    </> 

  // SIDE BAR
  return (
    <div className="px-3 sticky top-0">
        {/* DRAWER BUTTON */}
        <Box cursor="pointer" display={{ base: 'block', md: 'block', lg: "none" }} onClick={onOpen} mt={5} p={2}>
          <Icon as={FiMenu} boxSize={6} />
        </Box>
      
      <VStack  mt={10} display={{ base: 'none' , md: 'none', lg: "block"  }}>
        {menu}
      </VStack>
      
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay >
          <DrawerContent>
            <DrawerCloseButton color="white"/>
           
            <DrawerBody p={0} className="bg-gray-800 text-white">
            <VStack  mt={14} align="left" px={3} >
              {menu}
            </VStack>
              
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
};
