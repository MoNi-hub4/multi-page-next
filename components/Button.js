import React from "react";
import styles from "/styles/Button.module.css";

export const ButtonWhite = (props) => {
  return (
    <>
      <div class={styles.Btn}>{props.text}</div>
    </>
  );
};

export const ButtonOrange = () => {
  return <div>Button</div>;
};
