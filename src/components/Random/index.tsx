import React from "react";
import styled from "@emotion/styled";

const MenuList = ["피자 🍕", "치킨 🍗", "햄버거 🍔", "라면 🍜", "떡볶이 🌶", "굶기 🤮"];
const RandomMenu = MenuList[Math.floor(Math.random() * MenuList.length)];

const Random = () => {
   return (
     <Positioner>
        {RandomMenu}
     </Positioner>
   );
}

const Positioner = styled.div`
  font-weight: 800;
  font-size: 37px;
  color: #000000;
  margin-top: 2vh;
`;
export default Random