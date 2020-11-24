//pages/index.js
import Head from "next/head";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import OpenSource from "../components/sections/OpenSource";
import LandingLayout from "../components/layouts/LandingLayout";
import axios from "axios"
export default function Home({project,openSource}) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LandingLayout align="center" height="100% !important" bg="green.100">

        <Hero />
        <Projects project={project} />
        <OpenSource openSource={openSource}/>

      </LandingLayout>
    </>
  );
}
export async function getStaticProps() {
 
  const project=await axios.get("https://dev.to/api/articles?username=spiritbro1&tag=projectspiritbro1&state=all")
  const openSource=await axios.get("https://dev.to/api/articles?username=spiritbro1&tag=opensourcespiritbro1&state=all")
  return {
    props: {
          project:project.data.filter(data=>data.user.username==="spiritbro1"),
          openSource:openSource.data.filter(data=>data.user.username==="spiritbro1"),
      
    },
  }
}