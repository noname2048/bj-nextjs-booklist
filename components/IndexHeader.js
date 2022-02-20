import styles from "./IndexHeader.module.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillFilePlusFill } from "react-icons/bs";
export default function IndexHeader() {
  return (
    <div className={styles.header}>
      <logo className={styles.logo}>MyBooks</logo>
      <label htmlFor="" className={styles.label}>
        <input
          type="checkbox"
          name=""
          id=""
          className={styles.input}
          onChange={() => console.log("hi")}
          checked
        />
        <span className={styles.span}>
          <BiSearch size={"3rem"} className={styles.icon}></BiSearch>
        </span>
        {/* <span className={styles.span}></span> */}
      </label>
      <label htmlFor="">github</label>
    </div>
  );
}
