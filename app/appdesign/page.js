import styles from "/styles/webdesign.module.css";
import Image from "next/image";
import Appdesign1 from "/assets/app-design/desktop/image-airfilter.jpg";
import Appdesign2 from "/assets/app-design/desktop/image-eyecam.jpg";
import Appdesign3 from "/assets/app-design/desktop/image-faceit.jpg";
import Appdesign4 from "/assets/app-design/desktop/image-loopstudios.jpg";
import Appdesign5 from "/assets/app-design/desktop/image-todo.jpg";
import Background from "/assets/web-design/desktop/bg-pattern-intro-web.svg";
import Section02 from "@/components/Section02";

function Appdesign() {
  return (
    <>
      <div className={styles.section}>
        <p className={styles.title}>App Design</p>
        <span>
          <p className={styles.subtitle}>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </span>
        <Image src={Background}></Image>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image src={Appdesign1}></Image>
          <div className={styles.description}>
            <p>Airfilter</p>
            <span>
              Solving the problem of poor indoor air quality by filtering the
              air
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Appdesign2}></Image>
          <div className={styles.description}>
            <p>eyecam</p>
            <span>
              Product that lets you edit your favorite photos and videos at any
              time
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Appdesign3}></Image>
          <div className={styles.description}>
            <p>Faceit</p>
            <span>
              Get to meet your favorite internet superstar with the faceit app
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Appdesign5}></Image>
          <div className={styles.description}>
            <p>Todo</p>
            <span>
              A todo app that features cloud sync with light and dark mode
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Appdesign4}></Image>
          <div className={styles.description}>
            <p>loopstudios</p>
            <span>A VR experience app made for Loopstudios </span>
          </div>
        </div>
      </div>
      <Section02 isApp={true} />
    </>
  );
}

export default Appdesign;
