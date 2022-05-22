import React from "react";
import {Global} from "@emotion/react";
import {GlobalStyles} from "../style/GlobalStyle";
import Landing from "../components/Landing";
import Head from "next/head";
import MainPage from "../components/Main";

const MyApp = () => {
   return (
     <>
        <Head>
           <title>A-Pizza</title>
           <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <Global styles={GlobalStyles}/>
        <Landing/>
        <MainPage/>
     </>
   )
}

export default MyApp
