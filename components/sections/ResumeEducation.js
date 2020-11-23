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
  
} from "@chakra-ui/react";
function Feature({ name, date, major, ...rest }) {
  return (
    <Box
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
      borderRadius="md"
      mb={3}
      {...rest}
      style={{ pageBreakAfter: "auto", pageBreakInside: "avoid" }}
      position="relative"
    >
      <Heading fontSize="xl">{name}</Heading>
      <Text>{major}</Text>
      <Text fontSize={"sm"}>{date}</Text>
    </Box>
  );
}
export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  education,
  ...rest
}) {
  return (
    <Box style={{pageBreakAfter:"auto",pageBreakInside:"avoid"}} position="relative" wrap="no-wrap" px={8} {...rest}>

        <Heading  mb={2} as="h1" size="xl" fontWeight="bold" color="primary.800">
         Education
        </Heading>
        {education.map(data=><Feature
                name={data.name}
          date={data.date}
          major={data.major}
        />)}
        

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
