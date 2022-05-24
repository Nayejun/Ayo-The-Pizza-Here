import React from "react";
import ShowRandomMenu from "../Random";
import * as S from "./style";

const MainPage = () => {
   return (
      <>
         <S.Positioner>
            <S.Wrapper>
               <S.Text>오늘 먹을 메뉴는,</S.Text>
               <ShowRandomMenu />
               <S.Title>입니다.</S.Title>
            </S.Wrapper>
         </S.Positioner>
      </>
   );
};

export default MainPage;
