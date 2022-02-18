import styles from "../styles/Home.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <span>title</span>
        <input type="text" />
        <span>isbn</span>
        <input type="text" />
      </div>
      <div className={styles["option-container"]}>
        <div className={styles.option.card}>
          <span>domain/skills</span>
        </div>
        <div className={styles.option.card}>
          <span>language</span>
        </div>
        <div className={styles.option.card}>
          <span>difficulty</span>
        </div>
      </div>
    </div>
  );
}
