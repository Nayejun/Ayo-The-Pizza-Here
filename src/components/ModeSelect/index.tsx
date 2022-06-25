import React, { useState } from "react";
import * as S from "./style";
import MainPage from "../Menu";
import CustomMenuMap from "../CustomMenuMap";

function Select() {
  const [state, setState] = useState<number>(0);

  const SelectMode1 = () => {
    setState(1);
  };
  const SelectMode2 = () => {
    setState(2);
  };

  if (state == 1) {
    console.log("Default Menu");
    return <MainPage />;
  } else if (state == 2) {
    console.log("Custom Menu");
    return <CustomMenuMap />;
  } else {
    return (
      <S.Positioner>
        <S.Wrapper>
          <S.Button className="Btn1" onClick={SelectMode1}>
            기본 제공 메뉴
          </S.Button>
          <S.Button className="Btn2" onClick={SelectMode2}>
            직접 메뉴 입력
          </S.Button>
        </S.Wrapper>
      </S.Positioner>
    );
  }
}

export default Select;
