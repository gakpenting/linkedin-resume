//pages/index.js
import Head from "next/head";
import ResumeHeader from "../components/sections/ResumeHeader";
import ResumeProjects from "../components/sections/ResumeProjects";
import ResumeOpenSource from "../components/sections/ResumeOpenSource";
import ResumeHonors from "../components/sections/ResumeHonors";
import ResumeSkills from "../components/sections/ResumeSkills";
import ResumeEducation from "../components/sections/ResumeEducation";
import ResumeExperience from "../components/sections/ResumeExperience";
import faunadb, { query as q } from "faunadb"
import {Flex,Box} from "@chakra-ui/react"

export default function Home({profile,skill,education,experience}) {
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
<ResumeSkills skill={skill}/>
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeHonors />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeEducation  education={education}/>
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeExperience experience={experience} />
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
  const education=await serverClient.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('education'))),
        q.Lambda(x => q.Get(x))
      )
  );
  const skill=await serverClient.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('skill'))),
        q.Lambda(x => q.Get(x))
      )
  );
  const experience=await serverClient.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('experience'))),
        q.Lambda(x => q.Get(x))
      )
  );
  return {
    props: {
      profile:profile.data[0].data,
      education:education.data.map(a=>a.data),
      experience:experience.data.map(a=>a.data),
      skill:skill.data.map(a=>a.data),
    },
  }
}