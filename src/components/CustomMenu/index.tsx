import React, { useState } from "react";
import * as S from "./style";

const menus = [
  {
    menu: "피자",
    key: 1,
  },
  {
    menu: "치킨",
    key: 2,
  },
  {
    menu: "라면",
    key: 3,
  },
  {
    menu: "고기",
    key: 4,
  },
];

function CustomMenu() {
  const [textValue, setTextValue] = useState("");
  const length = menus.length;
  const changeTextValue = () => {
    setTextValue(menus[Math.floor(Math.random() * length)].menu);
    console.log(textValue);
  };

  return (
    <S.Positioner>
      <S.Wrapper>
        <S.Text>오늘 먹을 메뉴는,</S.Text>
        <S.RandomMenu>{textValue}</S.RandomMenu>
        <S.Title className="comment">입니다.</S.Title>
        <S.Button onClick={changeTextValue}>메뉴 정하기</S.Button>
      </S.Wrapper>
    </S.Positioner>
  );
}

export default CustomMenu;
