import React, { useState, useRef } from "react";
import MenuList from "./MenuList";
import CreateMenu from "./CreateMenu";
import { Positioner } from "./style";

function CustomMenu() {
  const [menus, setMenus] = useState<any>([
    {
      id: 1,
      name: "피자",
    },
    {
      id: 2,
      name: "치킨",
    },
    {
      id: 3,
      name: "떡볶이",
    },
    {
      id: 4,
      name: "라면",
    },
    {
      id: 5,
      name: "햄버거",
    },
    {
      id: 6,
      name: "족발",
    },
    {
      id: 7,
      name: "굶기",
    },
  ]);

  const nextId = useRef(8);

  const [inputs, setInputs] = useState({
    name: "",
  });

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
  };

  const [textValue, setTextValue] = useState("");
  const length = menus.length;
  const changeTextValue = () => {
    setTextValue(menus[Math.floor(Math.random() * length)].name);
    console.log(textValue);
  };

  const [view, setView] = useState<boolean>(false);

  if (view == true) {
    console.log("true");
    return <Positioner>{textValue}</Positioner>;
  }

  return (
    <div>
      <CreateMenu name={name} onDataChange={onDataChange} onCreate={onCreate} />
      {menus.map((menu: { id: React.Key | null | undefined }) => (
        <MenuList menu={menu} key={menu.id} />
      ))}
      <button onClick={changeTextValue}>메뉴 정하기</button>;
    </div>
  );
}

export default CustomMenu;
