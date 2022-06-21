import React from "react";
import * as S from "./style";

const Select = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.Button>기본 메뉴에서 고르기</S.Button>
        <S.Button>직접 설정한 메뉴에서 고르기</S.Button>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Select;
