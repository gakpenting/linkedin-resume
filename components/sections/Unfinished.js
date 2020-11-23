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
function Feature({ title, desc,link,date,tag, ...rest }) {
  return (
    <Box
    style={{pageBreakAfter:"auto",pageBreakInside:"avoid"}} position="relative"
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
      borderRadius="md"
      {...rest}
      mb={3}
    >
      <Heading fontSize="xl">{title}</Heading>
      <HStack spacing={2} my={2}>
        {tag.map(data=><Badge>{data}</Badge>)}
      
      </HStack>
      
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
  unfinished,
  ...rest
}) {
  return (
    <Box wrap="no-wrap" px={8} {...rest}>
      
        <Heading mb={2} as="h1" size="xl" fontWeight="bold" color="primary.800">
          Unfinished article
        </Heading>
        {unfinished.map(data=><Feature
        link={data.url}
          title={data.title}
          desc={data.description}
          date={data.published_timestamp}
          tag={data.tag_list}
        />)}
        
      
    </Box>
  );
}


