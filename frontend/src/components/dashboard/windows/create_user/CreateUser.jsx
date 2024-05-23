/** @format */

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
  useToast,
  RadioGroup,
  Stack,
  Radio,
  Spinner,
  Flex,
} from "@chakra-ui/react";

const CreateUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [semesterType, setSemesterType] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const validateForm = () => {
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!role.trim()) {
      errors.role = "Role is required";
    }
    if (!course.trim()) {
      errors.course = "Course is required";
    }
    if (!year.trim()) {
      errors.year = "Year is required";
    }
    if (!schoolYear.trim()) {
      errors.schoolYear = "School Year is required";
    }
    if (!semesterType.trim()) {
      errors.semesterType = "Semester Type is required";
    }
    if (!address.trim()) {
      errors.address = "Address is required";
    }
    if (!contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (!/^\d+$/.test(contactNumber)) {
      errors.contactNumber = "Contact Number must be a valid number";
    }
    if (!birthdate.trim()) {
      errors.birthdate = "Birthdate is required";
    }
    if (!gender.trim()) {
      errors.gender = "Gender is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        showtoast();
      }, 2000);
    }
  };

  const showtoast = () => {
    toast({
      title: "Wow Grape",
      description: "Created new account successfully",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "bottom",
    });
  };

  return (
    <SimpleGrid columns={1} spacing={4}>
      <Box py={5}>
        <form onSubmit={handleSubmit}>
          <Flex px={5} gap={3}>
            <FormControl isInvalid={!!errors.fullName} w="50%">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <FormHelperText>{errors.fullName}</FormHelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.email} w="50%">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>{errors.email}</FormHelperText>
            </FormControl>
          </Flex>

          <Flex px={5} gap={3}>
            <FormControl isInvalid={!!errors.password} w="50%">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>{errors.password}</FormHelperText>
            </FormControl>
            <FormControl w="50%">
              <FormLabel>Role</FormLabel>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="" disabled>
                  Select
                </option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </Select>
            </FormControl>
          </Flex>

          <Flex px={5} gap={3}>
            <FormControl isInvalid={!!errors.course} w="50%">
              <FormLabel>Course</FormLabel>
              <Input
                type="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <FormHelperText>{errors.course}</FormHelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.year} w="50%">
              <FormLabel>Year</FormLabel>
              <Input
                type="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <FormHelperText>{errors.year}</FormHelperText>
            </FormControl>
          </Flex>
          <Flex px={5} gap={3}>
            <FormControl isInvalid={!!errors.schoolYear} w="50%">
              <FormLabel>School Year</FormLabel>
              <Input
                type="schoolYear"
                value={schoolYear}
                onChange={(e) => setSchoolYear(e.target.value)}
              />
              <FormHelperText>{errors.schoolYear}</FormHelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.semesterType} w="50%">
              <FormLabel>Semester Type</FormLabel>
              <Input
                type="semesterType"
                value={semesterType}
                onChange={(e) => setSemesterType(e.target.value)}
              />
              <FormHelperText>{errors.semesterType}</FormHelperText>
            </FormControl>
          </Flex>

          <Flex px={5} gap={3}>
            <FormControl isInvalid={!!errors.address} w="50%">
              <FormLabel>Address</FormLabel>
              <Input
                type="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <FormHelperText>{errors.address}</FormHelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.contactNumber} w="50%">
              <FormLabel>Contact No.</FormLabel>
              <Input
                type="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <FormHelperText>{errors.contactNumber}</FormHelperText>
            </FormControl>
          </Flex>
          <Flex px={5} gap={3}>
            <FormControl isInvalid={!!errors.birthdate} w="50%">
              <FormLabel>Contact No.</FormLabel>
              <Input
                type="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <FormHelperText>{errors.birthdate}</FormHelperText>
            </FormControl>
            <FormControl w="50%">
              <FormLabel>Gender</FormLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>
          </Flex>

          <Button
            colorScheme="blue"
            mt={5}
            mx={5}
            size="lg"
            type="submit"
            disabled={loading}
          >
            {loading ? <Spinner size="sm" color="white" /> : "Create User"}
          </Button>
        </form>
      </Box>
    </SimpleGrid>
  );
};

export default CreateUser;
