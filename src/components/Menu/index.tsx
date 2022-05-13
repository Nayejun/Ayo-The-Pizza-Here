import React from "react";
import dummy from "../../utils/Menu.json";

const MenuList = () => {
   return (
     <ul className="menu_list">
        {dummy.menus.map((menu) => (
          <li key={menu.id}>
             {menu.menu}
          </li>))}
     </ul>
   )
}

export default MenuList