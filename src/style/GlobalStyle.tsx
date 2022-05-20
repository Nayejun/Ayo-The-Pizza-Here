import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }

  body {
    padding: 0;
    margin: 0;
    font-family: AppleSDGothicNeo, sans-serif;
  }
`;
