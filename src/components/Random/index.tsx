import React, {useState} from "react";
import styled from "@emotion/styled";

const Print = () => {
   const MenuList = ["피자 🍕", "치킨 🍗", "햄버거 🍔", "라면 🍜", "떡볶이 🌶", "굶기 🤮"];
   const RandomMenu: any = (MenuList[Math.floor(Math.random() * MenuList.length)]);
   const [viewCalendar, setViewCalendar] = useState(false)

   if (viewCalendar == true) {
      console.log("true");
      return {RandomMenu}.RandomMenu;
   }

   return <button onClick={() => setViewCalendar(true)}>여기야</button>

}

export default Print;