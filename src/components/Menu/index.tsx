import React, { useState } from "react";
import * as S from "../CustomMenu/style";

const MainPage = () => {
  const menus = [
    {
      id: 1,
      name: "๊ตถ๊ธฐ ๐คฎ",
    },
    {
      id: 2,
      name: "ํผ์ ๐",
    },
    {
      id: 3,
      name: "์นํจ ๐",
    },
    {
      id: 4,
      name: "ํ๋ฒ๊ฑฐ ๐",
    },
    {
      id: 5,
      name: "๋ผ๋ฉด ๐",
    },
    {
      id: 6,
      name: "๋ก๋ณถ์ด ๐ถ",
    },
    {
      id: 7,
      name: "๋ง๋ผํ ๐น",
    },
    {
      id: 8,
      name: "๊ตญ๋ฐฅ ๐ฒ",
    },
    {
      id: 9,
      name: "์ค์ ๐ฃ",
    },
    {
      id: 10,
      name: "๋ฎ๋ฐฅ ๐",
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
          <S.Text>์ค๋ ๋จน์ ๋ฉ๋ด๋,</S.Text>
          <S.ShowMenu>{random}</S.ShowMenu>
          <S.Title>์๋๋ค.</S.Title>
          <S.Button onClick={RandomMenu}>๋ฉ๋ด ์ ํ๊ธฐ</S.Button>
        </S.RandomMenuWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default MainPage;
