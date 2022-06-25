import React, { useState, useRef } from "react";
import CreateMenu from "./CreateMenu";
import * as S from "./style";

function CustomMenu() {
  const [menus, setMenus] = useState([
    {
      id: 1,
      name: "굶기 🤮",
    },
  ]);
  const [inputs, setInputs] = useState({
    name: "",
  });
  const [random, setRandom] = useState("");
  const [nextPage, setNextPage] = useState<number>(0);
  const nextId = useRef(1);
  const length = menus.length;
  const { name } = inputs;

  const onDataChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const menu = {
      id: 1 + nextId.current,
      name,
    };
    setMenus([...menus, menu]);

    setInputs({
      name: "",
    });
    nextId.current += 1;
    if (name == "") {
      alert("메뉴를 입력해주세요.");
    }
  };

  const RandomMenu = () => {
    setRandom(menus[Math.floor(Math.random() * length)].name);
    console.log(random);
  };

  const ShowRandomMenu = () => {
    setNextPage(1);
  };

  if (nextPage == 1) {
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
  } else {
    return (
      <S.Positioner>
        <S.Wrapper>
          <S.RandomMenuInput>
            <CreateMenu
              name={name}
              onDataChange={onDataChange}
              onCreate={onCreate}
            />
            <S.Button onClick={onCreate}>메뉴 추가하기</S.Button>
            <S.Button onClick={ShowRandomMenu}>완료</S.Button>
          </S.RandomMenuInput>
        </S.Wrapper>
      </S.Positioner>
    );
  }
}

export default CustomMenu;
function setMenus(arg0: { id: number; name: string }[]) {
  throw new Error("Function not implemented.");
}
