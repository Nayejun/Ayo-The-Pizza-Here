import React, {useState} from "react";
import styled from "@emotion/styled";

const ShowRandomMenu = () => {
   const MenuList = ["피자 🍕", "치킨 🍗", "햄버거 🍔", "라면 🍜", "떡볶이 🌶", "굶기 🤮"];
   const RandomMenu: any = (MenuList[Math.floor(Math.random() * MenuList.length)]);
   const [view, setView] = useState(false)

   if (view == true) {
      console.log("true");
      return {RandomMenu}.RandomMenu;
   }

   return <button onClick={() => setView(true)}>여기야</button>
}

export default ShowRandomMenu;