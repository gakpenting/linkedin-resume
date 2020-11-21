//pages/index.js
import Head from "next/head";
import LandingLayout from "../components/layouts/LandingLayout";
import Dashboard from "../components/sections/Dashboard";
export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    
       <Dashboard bg="green.100" px={5}/>
     
    </>
  );
}
