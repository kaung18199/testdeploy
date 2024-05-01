// pages/page.jsx
import Head from "next/head";
import CustomLayout from "../components/CustomLayout";

const Page = () => {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Change the link to the favicon image */}
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        {/* Add any other meta tags or link tags here */}
      </Head>
      <CustomLayout>{/* Your page content goes here */}</CustomLayout>
    </>
  );
};

export default Page;
