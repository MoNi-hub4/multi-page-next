import styles from "/styles/webdesign.module.css";
import Image from "next/image";
import Webdesign1 from "/assets/web-design/desktop/image-blogr.jpg";
import Webdesign2 from "/assets/web-design/desktop/image-builder.jpg";
import Webdesign3 from "/assets/web-design/desktop/image-camp.jpg";
import Webdesign4 from "/assets/web-design/desktop/image-express.jpg";
import Webdesign5 from "/assets/web-design/desktop/image-photon.jpg";
import Webdesign6 from "/assets/web-design/desktop/image-transfer.jpg";
import Background from "/assets/web-design/desktop/bg-pattern-intro-web.svg";
import Section02 from "@/components/Section02";

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
        <Image src={Background}></Image>
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
            <p>TRANSFER</p>
            <span>
              Site for low-cost money transfers and sending money within seconds
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign5}></Image>
          <div className={styles.description}>
            <p>PHOTON</p>
            <span>
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign2}></Image>
          <div className={styles.description}>
            <p>BUILDER</p>
            <span>
              Connects users with local contractors based on their location
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign1}></Image>
          <div className={styles.description}>
            <p>BLOGR</p>
            <span>
              Blogr is a platform for creating an online blog or publication
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Webdesign3}></Image>
          <div className={styles.description}>
            <p>CAMP</p>
            <span>
              Get expert training in coding, data, design, and digital marketing
            </span>
          </div>
        </div>
      </div>
      <Section02 isWeb={true} />
    </>
  );
}

export default Webdesign;
