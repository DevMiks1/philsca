/** @format */

// ReusableModal.jsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

const ViewAccount = ({ isOpen, onClose, account }) => {
  if (!account) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{account.userId}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={3}>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Name:</Text>
              {account.name}
            </Box>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Course:</Text>
              {account.course}
            </Box>
          </Flex>
        </ModalBody>

        <ModalBody>
          <Flex gap={3}>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Year:</Text>
              {account.year}
            </Box>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Address:</Text>
              {account.address}
            </Box>
          </Flex>
        </ModalBody>

        <ModalBody>
          <Flex gap={3}>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Birthdate:</Text>
              {account.birthdate}
            </Box>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Gender:</Text>
              {account.gender}
            </Box>
          </Flex>
        </ModalBody>
        <ModalBody>
          <Flex gap={3}>
            <Box bg="#9F7AEA" w="100%" py={2} px={3}>
              <Text fontWeight="bold">Gender:</Text>
              {account.email}
            </Box>
          </Flex>
        </ModalBody>

        {/* <ModalBody>
          <Flex bg="#9F7AEA" py={5} px={3} gap={3}></Flex>
        </ModalBody>
        <ModalBody>
          <Flex bg="#9F7AEA" py={5} px={3} gap={3}>
            <Text fontWeight="bold">Year:</Text>
            {account.year}
          </Flex>
        </ModalBody>
        <ModalBody>
          <Flex bg="#9F7AEA" py={5} px={3} gap={3}>
            <Text fontWeight="bold">Address:</Text>
            {account.address}
          </Flex>
        </ModalBody>
        <ModalBody>
          <Flex bg="#9F7AEA" py={5} px={3} gap={3}>
            <Text fontWeight="bold">Birthdate:</Text>
            {account.birthdate}
          </Flex>
        </ModalBody>
        <ModalBody>
          <Flex bg="#9F7AEA" py={5} px={3} gap={3}>
            <Text fontWeight="bold">Gender:</Text>
            {account.gender}
          </Flex>
        </ModalBody>
        <ModalBody>
          <Flex bg="#9F7AEA" py={5} px={3} gap={3}>
            <Text fontWeight="bold">Gender:</Text>
            {account.email}
          </Flex>
        </ModalBody> */}
      </ModalContent>
    </Modal>
  );
};

export default ViewAccount;
