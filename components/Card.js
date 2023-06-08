import React from "react";
import Image from "next/image";
import styles from "/styles/Card.module.css";

const Card = (props) => {
  return (
    <>
      <div class={styles.cardSection}>
        <div class={styles.image}>
          <Image
            src={props.img}
            width={200}
            height={200}
            // fill={true}
          ></Image>
        </div>

        <div class={styles.description}>
          <p>{props.title}</p>
          <span>{props.subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
