"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/assets/shared/desktop/logo-dark.png";
import menuBtn from "/assets/shared/mobile/icon-hamburger.svg";
import styles from "/styles/Navbar.module.css";
import styled from "styled-components";



export const Menu = styled.div`
  background: #1d1c1e;
  left: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 99;
  transform: translate(0,100%);
  padding: 30px;
  display: ${(props) => props.prop === false ? "none" : "block"};
  @media (min-width: 768px) {
    position: inherit;
    background: none;
    display: block !important;
    top: 0;
    transform: none;
  }

`;

const Navbar = (props) => {
  const [Active, setActive] = useState(false);

  return (
    <>
      <div class={styles.container}>
        <div class={styles.logo}>
          <Image src={Logo} />
        </div>

        <Menu prop={Active} class={styles.menu}>
          <div class={styles.menuItems}>
            <a> Our company</a>
            <a> Locations</a>
            <a> Contact</a>
          </div>
        </Menu>

        <div class={styles.menuBtn} onClick={() => setActive(!Active)}>
          <Image src={menuBtn} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
