import React from "react";
import * as S from "./style";
import RandomButton from "../Button";

const Main = () => {
   return (
     <>
        <S.Positioner>
           <S.Wrapper>
              <S.Text>오늘 먹을 메뉴는,</S.Text>
              <S.Title className="SubTitle">입니다.</S.Title>
              <RandomButton/>
           </S.Wrapper>
        </S.Positioner>
     </>
   );
}

export default Main