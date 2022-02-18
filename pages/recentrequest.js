import styles from "../styles/Home.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>최근요청</h1>
      <div className={styles["list-container"]}>
        <div className={styles.card}></div>
      </div>
    </div>
  );
}
