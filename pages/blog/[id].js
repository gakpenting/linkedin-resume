//pages/index.js
import Head from "next/head";
import LandingLayout from "../../components/layouts/LandingLayout";
import ArticleBlog from "../../components/sections/ArticleBlog";
export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LandingLayout height="100% !important" bg="green.100">
       <ArticleBlog/>
      </LandingLayout>
    </>
  );
}
