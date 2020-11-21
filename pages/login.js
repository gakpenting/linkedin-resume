//pages/index.js
import Head from "next/head";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box height="full" bg="green.100">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Flex width="full" align="center" justifyContent="center" >
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
         
            <Button width="full" mt={4} type="submit">
             Login
            </Button>
        
        </Box>
      </Box>
    </Flex>
    </Box>
  );
}
