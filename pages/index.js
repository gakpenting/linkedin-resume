//pages/index.js
import Head from "next/head";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import OpenSource from "../components/sections/OpenSource";
import Blog from "../components/sections/Blog";
import LandingLayout from "../components/layouts/LandingLayout";
import axios from "axios";
import {useState} from "react"
export default function Home() {
  const [project,setProject]=useState([])
  const [openSource,setOpenSource]=useState([])
  const [blog,setBlog]=useState([])
  getProject().then(data=>setProject(data))
  getOpenSource().then(data=>setOpenSource(data))
  getBlog().then(data=>setBlog(data))
  return (
    <>
      <Head>
        <title>My World</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LandingLayout align="center" height="100% !important" bg="green.100">
        <Hero />
        <Projects project={project} />
        <OpenSource openSource={openSource} />
        <Blog blog={blog} />
      </LandingLayout>
    </>
  );
}
async function getDesc(id) {
  const { data } = await axios.get("https://dev.to/api/comments?a_id=" + id);
  let desc = data.filter(
    (a) =>
      a.user.username === "spiritbro1" &&
      a.body_html.includes("(commentspiritbro1english)")
  );
  if (desc.length > 0) {
    return desc[0].body_html.replace(
      /\(commentspiritbro1english\)|\\n|<[^>]*>/gi,
      ""
    );
  } else {
    return "";
  }
}
async function getProject(){
  const project = await axios.get(
    "https://dev.to/api/articles?username=spiritbro1&tag=projectspiritbro1english&state=all"
  );
  return await Promise.all(
    project.data
      .filter((data) => data.user.username === "spiritbro1")
      .map(async (a) => {
        const description = await getDesc(a.id);
        return {
          title: a.title,
          url: a.url,
          published_timestamp: a.published_timestamp,
          description,
        };
      })
  )
}
async function getOpenSource(){
  const openSource = await axios.get(
    "https://dev.to/api/articles?username=spiritbro1&tag=opensourcespiritbro1english&state=all"
  );
  return await Promise.all(
    openSource.data
      .filter((data) => data.user.username === "spiritbro1")
      .map(async (a) => {
        const description = await getDesc(a.id);

        return {
          title: a.title,
          url: a.url,
          published_timestamp: a.published_timestamp,
          description,
        };
      })
  )
}
async function getBlog(){
  const blog = await axios.get(
    "https://dev.to/api/articles?username=spiritbro1&tag=blogspiritbro1english&state=all"
  );
  return blog.data.filter((data) => data.user.username === "spiritbro1")
}
