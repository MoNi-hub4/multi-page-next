import React from "react";
import { ButtonWhite } from "./Button";
import styles from "/styles/Footer.module.css";
import Logo from "/assets/shared/desktop/logo-light.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.footerCard}>
          <p>
            <span>Let’s talk about</span> <span>your project</span>
          </p>
          <span>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </span>
          <div className={styles.button}>
            <ButtonWhite text={"Get in touch"} />
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div class={styles.logo}>
            <Image src={Logo} width={200} height={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
