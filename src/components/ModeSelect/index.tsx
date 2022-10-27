import React, { useState } from "react";
import * as S from "./style";
import MainPage from "../Menu";
import CustomMenu from "../CustomMenu/CustomMenu";

function Select() {
  const [mode, setMode] = useState<number>(0);

  const SelectMode1 = () => {
    setMode(1);
  };
  const SelectMode2 = () => {
    setMode(2);
  };

  if (mode === 1) {
    return <MainPage />;
  } else if (mode === 2) {
    return <CustomMenu />;
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
