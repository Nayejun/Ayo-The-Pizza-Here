import React from "react";
import Head from "next/head";
import Landing from "../components/Landing";
import MainPage from "../components/Main";
import {GlobalStyles} from "../style/GlobalStyle";
import {Global} from "@emotion/react";

const MyApp = () => {
   return (
     <>
        <Head>
           <title>A-Pizza</title>
           <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <Landing/>
        <MainPage/>
        <Global styles={GlobalStyles}/>
     </>
   )
}

export default MyApp
