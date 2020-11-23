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
export default function Home({profile}) {
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
 <ResumeHeader profile={profile}/>
   
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


export async function getStaticProps() {
  const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
  const profile=await serverClient.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('profile'))),
        q.Lambda(x => q.Get(x))
      )
  );
  
  return {
    props: {
      profile:profile.data[0],
    },
  }
}