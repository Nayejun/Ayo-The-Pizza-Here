import React from "react";

function MenuList({ menu }: { menu: any }) {
  return (
    <div>
      <h4>name : {menu.name}</h4>
    </div>
  );
}

export default MenuList;
