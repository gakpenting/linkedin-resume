import React from "react";
import PropTypes from "prop-types";
import {
  Stack,
  Flex,
  
  Heading,
  
} from "@chakra-ui/react";

export default function Hero({

  ...rest
}) {
  return (
    <Flex
     
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
    
      px={8}
      {...rest}
    >
      <Stack justify="flex-start">
        
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
           
          >
         PANDA
          </Heading>
         

        
       
      </Stack>
      
    </Flex>
  );
}
