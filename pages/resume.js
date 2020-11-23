//pages/index.js
import Head from "next/head";
import ResumeHeader from "../components/sections/ResumeHeader";
import ResumeProjects from "../components/sections/ResumeProjects";
import ResumeOpenSource from "../components/sections/ResumeOpenSource";
import ResumeHonors from "../components/sections/ResumeHonors";
import ResumeSkills from "../components/sections/ResumeSkills";
import ResumeEducation from "../components/sections/ResumeEducation";
import ResumeExperience from "../components/sections/ResumeExperience";
import {Flex,Box} from "@chakra-ui/react"
//081217925090
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
<Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeProjects />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeOpenSource />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeSkills />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeHonors />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeEducation  />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeExperience />
    </Box>  
    </>
  );
}
