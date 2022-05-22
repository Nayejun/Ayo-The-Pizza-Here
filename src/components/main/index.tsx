import React from "react";
import * as S from "./style";
import ShowRandomMenu from "../Random";

const MainPage = () => {
   return (
     <>
        <S.Positioner>
           <S.Wrapper>
              <S.Text>오늘 먹을 메뉴는,</S.Text>
              <ShowRandomMenu/>
              <S.Title>입니다.</S.Title>
           </S.Wrapper>
        </S.Positioner>
     </>
   );
}

export default MainPage