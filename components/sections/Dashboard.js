import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Textarea,
  Link,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
function BasicUsage({ isOpen, onClose,...rest }) {
  
  return (
    <>
      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            asda
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
function Feature({ title, desc,link,date, onOpen, ...rest }) {
  return (
    <Box
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
      flex="1"
      borderRadius="md"
      {...rest}
   
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text >{desc}</Text>
      <Flex ><Link href={link}>{link}</Link></Flex>
      <Text >{date}</Text>
      <Stack spacing={4} align="flex-start" direction={{base:"column",md:"row",sm:"row"}}>
<Button pr={4}>Edit</Button>
<Button onClick={onOpen} colorScheme="red">Delete</Button>
      </Stack>
    </Box>
  )
}
function FormLinkedin({buttonType, ...rest }){
return (<>
<FormControl >
  <FormLabel>Project name</FormLabel>
  <Input bg="white" placeholder="Project name" />
</FormControl>

<FormControl >
  <FormLabel>Start Date</FormLabel>
  <Input bg="white" placeholder="Start Date" />
</FormControl>
<FormControl >
  <FormLabel>End Date</FormLabel>
  <Input bg="white" placeholder="End Date" />
</FormControl>
<FormControl >
  <FormLabel>Associated With</FormLabel>
  <Input bg="white" placeholder="Associated With" />
</FormControl>
<FormControl >
  <FormLabel>Project Url</FormLabel>
  <Input bg="white" placeholder="project url" />
</FormControl>
<FormControl >
  <FormLabel>Description</FormLabel>
  <Textarea bg="white" placeholder="Description" />
</FormControl>
<Button colorScheme="blue" mb={10}>{buttonType}</Button>
</>)

}
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
    
      py={8}
      {...rest}
    >
      <Flex mb={3}><Button>LogOUT</Button></Flex>
      <BasicUsage isOpen={isOpen} onClose={onClose}/>
      <VStack  align="stretch">
        
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign="left"
          >
         Linkedin
          </Heading>
          <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.500" }}>Create</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Edit</Tab>
          
        </TabList>
        <TabPanels>
          <TabPanel>
          <FormLinkedin buttonType="create"/>
          </TabPanel>
          <TabPanel>
          <FormLinkedin buttonType="edit"/>
          </TabPanel>
          
        </TabPanels>
      </Tabs>
          
      </VStack>
      <Feature title="hai" onOpen={onOpen} desc="panda" link="http://google" date="12-01-2020"/>
    </Box>
  );
}
