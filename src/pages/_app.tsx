import React from "react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../style/GlobalStyle";
import Landing from "../components/Landing/index";
import Head from "next/head";

const MyApp = () => {
   return (
      <>
         <Head>
            <title>A-Pizza</title>
            <link rel="shortcut icon" href="/favicon.ico" />
         </Head>
         <Global styles={GlobalStyles} />
         <Landing />
      </>
   );
};

export default MyApp;
