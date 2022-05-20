import React from "react";
import {Global} from "@emotion/react";
import {GlobalStyles} from "../style/GlobalStyle";
import Main from "../components/Main/index";
import Landing from "../components/Landing";
import Head from "next/head";

const MyApp = () => {
   return (
     <>
        <Head>
           <title>A-Pizza</title>
           <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <Global styles={GlobalStyles}/>
        <Landing/>
        <Main/>
     </>
   )
}

export default MyApp
