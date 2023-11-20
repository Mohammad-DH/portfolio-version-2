import styles from "./skills.module.css";
import backImage from "./images/back.svg";
import frontImage from "./images/front.svg";
import mobileSkillsImage from "./images/m_skills.svg";
import Image from "next/image";

export default function Skills() {
  return (
    <div className={[styles.skills, "page", "TEST4"].join(" ")}>
      <div className={["card", styles.skillsCard, "CARD4"].join(" ")}>
        <Image className={"Images"} src={backImage} />
      </div>
      <div className={["card", styles.skillsCard, "CARD4"].join(" ")}>
        <Image className={"Images"} src={frontImage} />
      </div>
      <div
        className={["card", "mobileCard", styles.skillsCard, "CARD4"].join(" ")}
      >
        <Image className={"Images"} src={mobileSkillsImage} />
      </div>
    </div>
  );
}
