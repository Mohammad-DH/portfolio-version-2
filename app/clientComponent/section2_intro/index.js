import styles from "./intro.module.css";
import introImage from "./images/intro.svg";
import mobileIntroImage from "./images/m_intro.svg";
import Image from "next/image";

export default function Intro() {
  return (
    <div className={[styles.intro, "page", "TEST2"].join(" ")}>
      <div className={["card", styles.introCard, "CARD2"].join(" ")}>
        <Image className={"Images"} src={introImage} alt="intro Image" />
      </div>
      <div
        className={["card", "mobileCard", styles.introCard, "CARD2"].join(" ")}
      >
        <Image className={"Images"} src={mobileIntroImage} alt="intro Image" />
      </div>
    </div>
  );
}
