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
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          property="og:url"
          content="https://ayo-the-pizza-here.vercel.app"
        />
        <meta property="og:title" content="A-Pizza 🍕" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/67637706/176061074-e85945f7-2792-4ba6-ae95-b70df6365311.png"
        />
        <meta
          property="og:description"
          content="뭐 먹을지 고민될 때, 랜덤으로 메뉴를 뽑아봐 !"
        />
      </Head>
      <Global styles={GlobalStyles} />
      <Landing />
    </>
  );
};

export default MyApp;
