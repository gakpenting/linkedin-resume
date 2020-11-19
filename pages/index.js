//pages/index.js
import Head from "next/head";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import OpenSource from "../components/sections/OpenSource";
import Blog from "../components/sections/Blog";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LandingLayout height="100% !important" bg="green.100">
        <Hero />
        <Projects />
        <OpenSource />
        <Blog />
      </LandingLayout>
    </>
  );
}
