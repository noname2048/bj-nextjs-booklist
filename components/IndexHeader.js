import styles from "./IndexHeader.module.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillFilePlusFill } from "react-icons/bs";
export default function IndexHeader() {
  return (
    <div className={styles.header}>
      <div className={styles["header-left"]}></div>
      <div className={styles["header-center"]}>
        <div className={styles["button-container"]}>
          <div className={styles["button-left-container"]}>
            <BiSearch size={"3rem"}></BiSearch>
          </div>
          <div className={styles["button-right-container"]}>
            <BsFillFilePlusFill size={"3rem"}></BsFillFilePlusFill>
          </div>
        </div>
      </div>
      <div className={styles["header-right"]}></div>
    </div>
  );
}
