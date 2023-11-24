import styles from "./title.module.css";
import introImage from "./images/intro.svg";
import mobileIntroImage from "./images/m_intro.svg";
import Image from "next/image";

export default function Title() {
  return (
    <div className={[styles.intro, "page", "TEST3"].join(" ")}>
      <div className={["card", styles.introCard, "CARD3"].join(" ")}>
        <Image
          fetchPriority="low"
          className={"Images"}
          src={introImage}
          alt="problem solver experienced in full stack development"
        />
      </div>
      <div
        className={["card", "mobileCard", styles.introCard, "CARD3"].join(" ")}
      >
        <Image
          fetchPriority="low"
          className={"Images"}
          src={mobileIntroImage}
          alt="problem solver experienced in full stack development"
        />
      </div>
    </div>
  );
}
