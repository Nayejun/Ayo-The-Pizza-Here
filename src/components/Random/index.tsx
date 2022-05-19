import React, {forwardRef, useRef, useState} from "react";
import styled from "@emotion/styled";

const MenuList = ["피자 🍕", "치킨 🍗", "햄버거 🍔", "라면 🍜", "떡볶이 🌶", "굶기 🤮"];
const RandomMenu: any = (MenuList[Math.floor(Math.random() * MenuList.length)]);

const Positioner = styled.div`
  font-weight: 800;
  font-size: 37px;
  color: #000000;
  margin-top: 2vh;
`;

const ButtonStyle = styled.button`
  width: 22vh;
  height: 5.5vh;
  background: #FF8964;
  border-radius: 75px;
  border: none;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 100;
  font-size: 17px;
  line-height: 24px;
  margin-top: 14vh;
  margin-bottom: -20vh;
`;
