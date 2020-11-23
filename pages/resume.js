//pages/index.js
import Head from "next/head";
import ResumeHeader from "../components/sections/ResumeHeader";
import ResumeProjects from "../components/sections/ResumeProjects";
import ResumeOpenSource from "../components/sections/ResumeOpenSource";
import ResumeHonors from "../components/sections/ResumeHonors";
import ResumeSkills from "../components/sections/ResumeSkills";
import ResumeEducation from "../components/sections/ResumeEducation";
import ResumeExperience from "../components/sections/ResumeExperience";
import faunadb, { query as q } from "faunadb";
import {Flex,Box} from "@chakra-ui/react";
import axios from "axios";
import { NextSeo } from 'next-seo';

export default function Home({profile,skill,education,experience,awards,projects,openSource}) {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo noindex={true} nofollow={true}/>
      <Flex
    
    direction="column"
    align="center"

    m="0 auto"
   
  >
 <ResumeHeader profile={profile}/>
   
  </Flex>
<Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeProjects projects={projects}/>
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeOpenSource openSource={openSource} />
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeSkills skill={skill}/>
    </Box>  
    <Box style={{pageBreakInside:"auto"}} mt={5}>
<ResumeHonors awards={awards}/>
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
  const awards=await axios.get("https://dev.to/api/articles?username=spiritbro1&tag=rewardspiritbro1")
  const projects=await axios.get("https://dev.to/api/articles?username=spiritbro1&tag=projectspiritbro1")
  const openSource=await axios.get("https://dev.to/api/articles?username=spiritbro1&tag=opensourcespiritbro1")
  return {
    props: {
      profile:profile.data[0].data,
      education:education.data.map(a=>a.data),
      experience:experience.data.map(a=>a.data),
      skill:skill.data.map(a=>a.data),
      awards:awards.data.filter(data=>data.user.username==="spiritbro1"),
      projects:projects.data.filter(data=>data.user.username==="spiritbro1"),
      openSource:openSource.data.filter(data=>data.user.username==="spiritbro1"),
    },
  }
}