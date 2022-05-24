import React from "react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../style/GlobalStyle";
import Landing from "../components/Landing/index";
import Head from "next/head";
import MainPage from "../components/Menu";

const MyApp = () => {
   return (
      <>
         <Head>
            <title>A-Pizza</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width" />
            <meta content="yes" name="apple-mobile-web-app-capable" />
         </Head>
         <Global styles={GlobalStyles} />
         <Landing />
         <MainPage />
      </>
   );
};

export default MyApp;
