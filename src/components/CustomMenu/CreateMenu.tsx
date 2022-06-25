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
    </>
  );
};

export default CreateMenu;
