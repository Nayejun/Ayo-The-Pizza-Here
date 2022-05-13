import React from "react";
import {Global} from "@emotion/react";
import {GlobalStyles} from "../style/GlobalStyle";
import {Landing} from "../components/Landing";
import Main from "../components/Main";

const MyApp = () => {
   return (
     <>
        <Global styles={GlobalStyles}/>
        <Landing/>
        <Main/>
     </>
   )
}

export default MyApp
