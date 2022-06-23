import React from "react";

const MenuItem = ({ menu, onChecked }) => {
  return (
    <span
      className={`menu-lis__item ${
        menu.checked ? `menu-list__item--active ` : ""
      }`}
    >
      {menu.name}
    </span>
  );
};
