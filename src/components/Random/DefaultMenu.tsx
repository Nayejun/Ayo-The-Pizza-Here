import React, { useState } from "react";
import { Positioner } from "./style";

function ShowRandomMenu() {
  const [menu, setMenu] = useState([
    "피자 🍕",
    "치킨 🍗",
    "햄버거 🍔",
    "라면 🍜",
    "떡볶이 🌶",
    "굶기 🤮",
    "족발 🐷",
  ]);
  const RandomMenu: any = menu[Math.floor(Math.random() * menu.length)];
  const [view, setView] = useState<boolean>(false);

  if (view === true) {
    return <Positioner>{RandomMenu}</Positioner>;
  }

  return <button onClick={() => setView(true)}>메뉴 정하기</button>;
}

export default ShowRandomMenu;
