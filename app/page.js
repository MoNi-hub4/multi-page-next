import { ButtonWhite } from "@/components/Button";
import Image from "next/image";
import styles from "/styles/page.module.css";
import Phone from "/assets/home/desktop/image-hero-phone.png";
import BgPattern from "/assets/home/desktop/bg-pattern-hero-home.svg";
import Section02 from "@/components/Section02";

function Homepage() {
  return (
    <div class={styles.Body}>
      <div class={styles.section01}>
      <div class={styles.section}>
        <div class={styles.sectionBody}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <span>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences.
            </p>
            <p>Find out more about our services.</p>
          </span>
          <div class={styles.Button}>
            <ButtonWhite text={"Learn More"} />
          </div>
        </div>
        <div class={styles.phoneImage}>
          <Image src={Phone} alt="Phone" />
        </div>
        <div class={styles.backgroundImage}>
          <Image src={BgPattern} />
        </div>
      </div>
      </div>
      <Section02/>
    </div>
  );
}

export default Homepage;
