import React from "react";
import {Global} from "@emotion/react";
import {GlobalStyles} from "../style/GlobalStyle";
import {Main} from "../components/main";

const MyApp = () => {
   return (
     <>
        <Global styles={GlobalStyles}/>
        <Main/>
     </>
   )
}

export default MyApp
