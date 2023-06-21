import styles from "/styles/webdesign.module.css";
import Image from "next/image";
import Webdesign1 from "/assets/web-design/desktop/image-blogr.jpg";

function Webdesign() {
  return (
    <>
      <div className={styles.section}>
        <p className={styles.title}>Web Design</p>
        <span>
          <p className={styles.subtitle}>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </span>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1} ></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>A multi-carrier shipping website for ecommerce businesses</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1} ></Image>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1} ></Image>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1} ></Image>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1} ></Image>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1} ></Image>
        </div>
      </div>
    </>
  );
}

export default Webdesign;
