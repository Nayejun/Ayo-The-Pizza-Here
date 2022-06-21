import React from "react";
import * as S from "./style";

const CustomMenu = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.Input maxLength={10} />
      </S.Wrapper>
    </S.Positioner>
  );
};

export default CustomMenu;
