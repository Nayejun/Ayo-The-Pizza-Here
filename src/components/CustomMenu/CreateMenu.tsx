import React from "react";

interface Props {
  name: any;
  onDataChange: any;
  onCreate: any;
}

const CreateMenu: React.FC<Props> = ({ name, onCreate, onDataChange }) => {
  return (
    <div>
      <input type="text" name="name" onChange={onDataChange} value={name} />
      <button onClick={onCreate}>Add</button>
    </div>
  );
};

export default CreateMenu;
