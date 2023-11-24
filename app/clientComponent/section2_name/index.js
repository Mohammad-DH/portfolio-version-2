import styles from "./name.module.css";
import nameImage from "./images/name.svg";
import mobileNameImage from "./images/m_name.svg";
import Image from "next/image";

export default function Name() {
  return (
    <div className={[styles.name, "page", "TEST2"].join(" ")}>
      <div className={["card", styles.nameCard, "CARD2"].join(" ")}>
        <Image
          fetchPriority="low"
          className={"Images"}
          src={nameImage}
          alt="mohammad dehgani aka mr.j"
        />
      </div>
      <div
        className={["card", "mobileCard", styles.nameCard, "CARD2"].join(" ")}
      >
        <Image
          fetchPriority="low"
          className={"Images"}
          src={mobileNameImage}
          alt="mohammad dehgani aka mr.j"
        />
      </div>
    </div>
  );
}
