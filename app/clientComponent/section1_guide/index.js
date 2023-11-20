import styles from "./guide.module.css";
import guideImage from "./images/guide.svg";
import mobileGuideImage from "./images/m_guide.svg";
import Image from "next/image";

export default function Guide() {
  return (
    <div className={[styles.guide, "page", "TEST"].join(" ")}>
      <div className={["card", styles.guideCard, "CARD1"].join(" ")}>
        <Image src={guideImage} className={"Images"} alt="guide Image" />
      </div>
      <div
        className={["card", "mobileCard", styles.guideCard, "CARD1"].join(" ")}
      >
        <Image src={mobileGuideImage} className={"Images"} alt="guide Image" />
      </div>
    </div>
  );
}
