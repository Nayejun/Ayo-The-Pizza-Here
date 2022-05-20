import type {NextPage} from 'next'
import Head from "next/head";
import {Landing} from "../components/Landing";
import {Main} from "../components/Main";

const Home: NextPage = () => {
   return (
     <>
        <Head>
           <title>A-Pizza</title>
           <link rel="shortcut icon" href="/favicon.ico"/>
        </Head>
        <Landing/>
        <Main/>
     </>
   )
}

export default Home
