import React from "react";
import PropTypes from "prop-types";
import {
  VStack,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
function Feature({ title, desc, ...rest }) {
  return (
    <Box
      
      p={3}
      shadow="md"
      borderWidth="1px"
      borderColor="green.500"
    
      borderRadius="md"
      {...rest}
      cursor="pointer"
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text >{desc}</Text>
    </Box>
  )
}
export default function Hero({

  ...rest
}) {
  return (
    <Box
    mx={10}
    
    >
      <VStack align="stretch">
        
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            mb={5}
          >
         Blog
          </Heading>
         
          <Feature
      
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
        
       
      </VStack>
      
    </Box>
  );
}
