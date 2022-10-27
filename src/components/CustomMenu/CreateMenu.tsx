import React, { useState } from "react";
import * as S from "./style";

interface Props {
  name: any;
  onDataChange: any;
  onCreate: any;
}

const CreateMenu: React.FC<Props> = ({ name, onCreate, onDataChange }) => {
  const [menu, setMenu] = useState<string>("");
  return (
    <>
      <S.Input
        type="text"
        name="name"
        onChange={onDataChange}
        value={name}
        placeholder="추가할 메뉴를 입력해주세요."
      />
    </>
  );
};

export default CreateMenu;
