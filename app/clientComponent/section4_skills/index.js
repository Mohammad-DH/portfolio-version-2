import styles from "./skills.module.css";
import backImage from "./images/back.svg";
import frontImage from "./images/front.svg";
import mobileSkillsImage from "./images/m_skills.svg";
import Image from "next/image";

export default function Skills() {
  return (
    <div className={[styles.skills, "page", "TEST4"].join(" ")}>
      <div className={["card", styles.skillsCard, "CARD4"].join(" ")}>
        <Image
          fetchPriority="low"
          className={"Images"}
          src={backImage}
          alt="backend skills"
        />
      </div>
      <div className={["card", styles.skillsCard, "CARD4"].join(" ")}>
        <Image
          fetchPriority="low"
          className={"Images"}
          src={frontImage}
          alt="frontend skills"
        />
      </div>
      <div
        className={["card", "mobileCard", styles.skillsCard, "CARD4"].join(" ")}
      >
        <Image
          fetchPriority="low"
          className={"Images"}
          src={mobileSkillsImage}
          alt="skills"
        />
      </div>
    </div>
  );
}
