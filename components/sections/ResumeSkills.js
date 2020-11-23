import React from "react";
import PropTypes from "prop-types";
import {
  Box,
Link, 
  Heading,
  Stack,
  Text,
  Flex,
  Badge,
  HStack,
  Button,
  
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
function Feature({ title, desc,link, ...rest }) {
  return (
    <Box
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
      borderRadius="md"
      {...rest}
      style={{pageBreakAfter:"auto",pageBreakInside:"avoid"}} position="relative"
      mb={3}
      
    >
      <Heading fontSize="xl">{title}</Heading>
      <HStack spacing={2} my={2}>
      <Badge>Default</Badge><Badge>Default</Badge>
      </HStack>
      
      <Text>{desc}</Text>
      <Flex ><Link href={link}>{link}</Link></Flex>
      <Text fontSize={"sm"}>12/11/2020</Text>
    </Box>
  );
}
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  skill,
  ...rest
}) {
  return (
    <Box wrap="no-wrap" px={8} {...rest}>
      {/* <Stack> */}
        <Heading mb={2} as="h1" size="xl" fontWeight="bold" color="primary.800">
         Skills
        </Heading>
        <HStack spacing={4}>
          {skill.map(a=><Button shadow="md"
      borderWidth="1px"
      borderColor="green.500"
  borderRadius="md">{a.name}</Button>  )}
 
 
</HStack>
        
      {/* </Stack> */}
    </Box>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "Welcome To My World",
  subtitle:
    "In this website you can see all my work i've done in the past 3 years and more",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
