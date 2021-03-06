import React, { useState } from "react";
import { Positioner } from "./style";

function ShowRandomMenu() {
  const [menu, setMenu] = useState([
    "ํผ์ ๐",
    "์นํจ ๐",
    "ํ๋ฒ๊ฑฐ ๐",
    "๋ผ๋ฉด ๐",
    "๋ก๋ณถ์ด ๐ถ",
    "๊ตถ๊ธฐ ๐คฎ",
    "์กฑ๋ฐ ๐ท",
  ]);
  const RandomMenu: any = menu[Math.floor(Math.random() * menu.length)];
  const [view, setView] = useState<boolean>(false);

  if (view == true) {
    console.log("true");
    return <Positioner>{RandomMenu}</Positioner>;
  }

  return <button onClick={() => setView(true)}>๋ฉ๋ด ์ ํ๊ธฐ</button>;
}

export default ShowRandomMenu;
