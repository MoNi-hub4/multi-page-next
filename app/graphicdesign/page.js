import styles from "/styles/webdesign.module.css";
import Image from "next/image";
import GraphicDesign1 from "/assets/graphic-design/desktop/image-boxed-water.jpg";
import GraphicDesign2 from "/assets/graphic-design/desktop/image-change.jpg";
import GraphicDesign3 from "/assets/graphic-design/desktop/image-science.jpg";

import Background from "/assets/web-design/desktop/bg-pattern-intro-web.svg";
import Section02 from "@/components/Section02";

function GraphicDesign() {
  return (
    <>
      <div className={styles.section}>
        <p className={styles.title}>Graphic Design</p>
        <span>
          <p className={styles.subtitle}>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </span>
        <Image src={Background}></Image>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image src={GraphicDesign2}></Image>
          <div className={styles.description}>
            <p>Tim Brown</p>
            <span>
              A book cover designed for Tim Brown’s new release, ‘Change’
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={GraphicDesign1}></Image>
          <div className={styles.description}>
            <p>Boxed Water</p>
            <span>A simple packaging concept made for Boxed Water</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={GraphicDesign3}></Image>
          <div className={styles.description}>
            <p>SCIENCE!</p>
            <span>
              A poster made in collaboration with the Federal Art Project
            </span>
          </div>
        </div>
      </div>
      <Section02 isDesign={true} />
    </>
  );
}

export default GraphicDesign;
