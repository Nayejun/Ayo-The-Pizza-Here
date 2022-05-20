import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";

const MenuList = ["피자 🍕", "치킨 🍗", "햄버거 🍔", "라면 🍜", "떡볶이 🌶", "굶기 🤮"];
export const RandomMenu: any = (MenuList[Math.floor(Math.random() * MenuList.length)]);

const Print = () => {
   const [viewCalendar, setViewCalendar] = useState(false)
   const PrintMenu = () => {
      return {RandomMenu};
   }
   if (viewCalendar == true) {
      console.log("TRUE");
      return <PrintMenu/>;
   }

   return (
     <>
        <button onClick={() => setViewCalendar(true)}>여기야</button>
     </>
   )

}

export default Print;