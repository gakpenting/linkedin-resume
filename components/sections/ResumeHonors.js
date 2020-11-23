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
import { PhoneIcon } from "@chakra-ui/icons";
function Feature({ title, desc,link,date, ...rest }) {
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
      <Text>{desc}</Text>
      <Flex ><Link href={link}>{link}</Link></Flex>
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
  awards,
  ...rest
}) {
  return (
    <Box wrap="no-wrap" px={8} {...rest}>
      
        <Heading mb={2} as="h1" size="xl" fontWeight="bold" color="primary.800">
         Honors And Rewards
        </Heading>
        {awards.map(data=><Feature
        title={data.title}
          link={data.url}
          desc={data.description}
          date={data.published_timestamp}
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
