import React from "react";
import dummy from "../../utils/Menu.json";

const MenuList = () => {
   return (
     <ul className="list_day">
        {dummy.days.map((day) => (
          <li key={day.id}>
             {day.day}
          </li>))}
     </ul>
   )
}

export default MenuList