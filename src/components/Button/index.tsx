import React from "react";
import styled from "@emotion/styled";

const RandomButton = () => {
  return <ButtonStyle>메뉴 정하기</ButtonStyle>;
};
const ButtonStyle = styled.button`
  width: 22vh;
  height: 5.5vh;
  background: #ff8964;
  border-radius: 75px;
  border: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 100;
  font-size: 17px;
  line-height: 24px;
  margin-top: 14vh;
  margin-bottom: -20vh;
`;

export default RandomButton;
