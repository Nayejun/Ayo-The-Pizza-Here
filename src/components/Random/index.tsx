import React, { useState } from "react";
import { Positioner } from "./style";

const ShowRandomMenu = () => {
   const MenuList = [
      "피자 🍕",
      "치킨 🍗",
      "햄버거 🍔",
      "라면 🍜",
      "떡볶이 🌶",
      "굶기 🤮",
   ];
   const RandomMenu: any =
      MenuList[Math.floor(Math.random() * MenuList.length)];
   const [view, setView] = useState<boolean>(false);

   if (view == true) {
      console.log("true");
      return <Positioner>{RandomMenu}</Positioner>;
   }

   return <button onClick={() => setView(true)}>메뉴 정하기</button>;
};

export default ShowRandomMenu;
