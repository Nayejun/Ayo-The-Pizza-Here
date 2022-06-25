import React, { useState } from "react";
import * as S from "../CustomMenu/style";

const MainPage = () => {
  const menus = [
    {
      id: 1,
      name: "굶기 🤮",
    },
    {
      id: 2,
      name: "피자 🍕",
    },
    {
      id: 3,
      name: "치킨 🍗",
    },
    {
      id: 4,
      name: "햄버거 🍔",
    },
    {
      id: 5,
      name: "라면 🍜",
    },
    {
      id: 6,
      name: "떡볶이 🌶",
    },
    {
      id: 7,
      name: "마라탕 👹",
    },
    {
      id: 8,
      name: "국밥 🍲",
    },
    {
      id: 9,
      name: "스시 🍣",
    },
    {
      id: 10,
      name: "덮밥 🍚",
    },
  ];
  const [random, setRandom] = useState("");
  const length = menus.length;

  const RandomMenu = () => {
    setRandom(menus[Math.floor(Math.random() * length)].name);
    console.log(random);
  };

  return (
    <S.Positioner>
      <S.Wrapper>
        <S.RandomMenuWrapper>
          <S.Text>오늘 먹을 메뉴는,</S.Text>
          <S.ShowMenu>{random}</S.ShowMenu>
          <S.Title>입니다.</S.Title>
          <S.Button onClick={RandomMenu}>메뉴 정하기</S.Button>
        </S.RandomMenuWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default MainPage;
