import React from "react";
import { ButtonWhite } from "./Button";
import styles from "/styles/Footer.module.css";
import Logo from "/assets/shared/desktop/logo-light.png";
import Image from "next/image";
import Facebook from "/assets/shared/desktop/icon-facebook.svg";
import Instagram from "/assets/shared/desktop/icon-instagram.svg";
import Pinterest from "/assets/shared/desktop/icon-pinterest.svg";
import Youtube from "/assets/shared/desktop/icon-youtube.svg";
import Twitter from "/assets/shared/desktop/icon-twitter.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.footerCard}>
          <div className={styles.textsection}>
            <p className={styles.text}>
              <span>Let’s talk about</span> <span>your project</span>
            </p>
            <span className={styles.subtext}>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </span>
          </div>
          <div className={styles.button}>
            <ButtonWhite text={"Get in touch"} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.section01}>
            <div className={styles.logo}>
              <Image src={Logo} width={200} height={25} />
            </div>
            <div className={styles.navmenu}>
              <a>Our Company</a>
              <a>Location</a>
              <a>Contact</a>
            </div>
          </div>
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
            <div className={styles.icons}>
              <Image src={Facebook}></Image>
              <Image src={Youtube}></Image>
              <Image src={Twitter}></Image>
              <Image src={Pinterest}></Image>
              <Image src={Instagram}></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
