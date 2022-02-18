import styles from "../styles/Home.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <button>back</button>
      <div className={styles.navigation}>
        <input type="text" />
        <span>button</span>
      </div>
      <div className={styles["list-container"]}>
        <div className={styles.card}></div>
      </div>
      <footer></footer>
    </div>
  );
}
