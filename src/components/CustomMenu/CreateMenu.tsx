import React from "react";
import * as S from "./style";

interface Props {
  name: any;
  onDataChange: any;
  onCreate: any;
}

const CreateMenu: React.FC<Props> = ({ name, onCreate, onDataChange }) => {
  return (
    <>
      <S.Input type="text" name="name" onChange={onDataChange} value={name} />
      <S.Button onClick={onCreate}>메뉴 추가하기</S.Button>
    </>
  );
};

export default CreateMenu;
