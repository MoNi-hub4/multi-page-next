import React from "react";
import Card from "./Card";
import styles from "/styles/section03.module.css";
import { Data } from "@/public/Data";

const Section03 = () => {
  return (
    <div className={styles.section}>
      {Data.map((data) => (
          <Card img={data.image} title={data.title} subtitle={data.subtitle} />
      ))}
    </div>
  );
};

export default Section03;
