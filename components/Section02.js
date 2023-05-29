import React from "react";
import styles from "/styles/section02.module.css";
import Link from "next/link";

const Section02 = () => {
  return (
    <>
      <div class={styles.section}>
        <div class={`${styles.webdesign} ${styles.gridchild}`}>
          Web Design
          <Link href="/webdesign">
            <span>View Projects</span>
          </Link>
        </div>
        <div class={`${styles.appdesign} ${styles.gridchild}`}>
          App Design
          <Link href="/appdesign">
            <span>View Projects</span>
          </Link>
        </div>
        <div class={`${styles.graphicdesign} ${styles.gridchild}`}>
          Graphic Design
          <Link href="/graphicdesign">
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section02;
