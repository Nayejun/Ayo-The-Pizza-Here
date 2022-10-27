import React from "react";
import styled from "@emotion/styled";

const BackToFirstPageButton = () => {
  return (
    <ButtonStyle
      onClick={() => {
        location.reload();
      }}
    >
      처음으로 돌아가기
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: 22vh;
  height: 5.5vh;
  background: none;
  border: none;
  color: gray;
  font-style: normal;
  font-weight: 100;
  font-size: 0.8rem;
`;

export default BackToFirstPageButton;
