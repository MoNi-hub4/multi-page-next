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
        <div className={styles.footer}>
          <>
            <div className={styles.logo}>
              <Image src={Logo} width={200} height={25} />
            </div>
            <div className={styles.navmenu}>
              <a>Our Company</a>
              <a>Location</a>
              <a>Contact</a>
            </div>
          </>
          <div className={styles.section02}>
            <div className={styles.address1}>
              <p>Designo Central Office</p>
              <span>3886 Wellington Street</span>
              <span>Toronto, Ontario M9C 3J5</span>
            </div>
            <div className={styles.address2}>
              <p>Contact Us (Central Office)</p>
              <span>P : +1 253-863-8967</span>
              <span>M : contact@designo.co</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
