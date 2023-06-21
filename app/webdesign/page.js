import styles from "/styles/webdesign.module.css";
import Image from "next/image";
import Webdesign1 from "/assets/web-design/desktop/image-blogr.jpg";
import Webdesign2 from "/assets/web-design/desktop/image-builder.jpg";
import Webdesign3 from "/assets/web-design/desktop/image-camp.jpg";
import Webdesign4 from "/assets/web-design/desktop/image-express.jpg";
import Webdesign5 from "/assets/web-design/desktop/image-photon.jpg";
import Webdesign6 from "/assets/web-design/desktop/image-transfer.jpg";

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
          <Image src={Webdesign4}></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>
              A multi-carrier shipping website for ecommerce businesses
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign6}></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>
              A multi-carrier shipping website for ecommerce businesses
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign5}></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>
              A multi-carrier shipping website for ecommerce businesses
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign2}></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>
              A multi-carrier shipping website for ecommerce businesses
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1}></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>
              A multi-carrier shipping website for ecommerce businesses
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign3}></Image>
          <div className={styles.description}>
            <p>Express</p>
            <span>
              A multi-carrier shipping website for ecommerce businesses
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webdesign;
