//pages/index.js
import Head from "next/head";
import ResumeHeader from "../components/sections/ResumeHeader";
import ResumeProjects from "../components/sections/ResumeProjects";
import ResumeOpenSource from "../components/sections/ResumeOpenSource";
import ResumeSkills from "../components/sections/ResumeSkills";
import {Flex,Box} from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
    
    direction="column"
    align="center"

    m="0 auto"
   
  >
 <ResumeHeader />
   
  </Flex>
<Box  mt={5}>
<ResumeProjects />
    </Box>  
    <Box  mt={5}>
<ResumeOpenSource />
    </Box>  
    <Box  mt={5}>
<ResumeSkills />
    </Box>  
    </>
  );
}
