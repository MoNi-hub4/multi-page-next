import { ButtonWhite } from "@/components/Button";
import styles from "/styles/page.module.css";

function Homepage() {
  return (
    <>
      <div class={styles.section}>
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
    </>
  );
}

export default Homepage;
