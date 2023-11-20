import styles from "./name.module.css";
import nameImage from "./images/name.svg";
import mobileNameImage from "./images/m_name.svg";
import Image from "next/image";

export default function Name() {
  return (
    <div className={[styles.name, "page", "TEST3"].join(" ")}>
      <div className={["card", styles.nameCard, "CARD3"].join(" ")}>
        <Image className={"Images"} src={nameImage} alt="name Image" />
      </div>
      <div
        className={["card", "mobileCard", styles.nameCard, "CARD3"].join(" ")}
      >
        <Image className={"Images"} src={mobileNameImage} alt="name Image" />
      </div>
    </div>
  );
}
