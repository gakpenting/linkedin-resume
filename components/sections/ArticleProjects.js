import React from "react";
import marked from "marked"
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
      
    >
      <Heading fontSize="xl">{title}</Heading>
      <div dangerouslySetInnerHTML={{__html:marked('# Marked in the browser\n\nRendered by **marked**.')}} />
      
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
        
        
          <Feature
      
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
        
       
      </VStack>
      
    </Box>
  );
}
