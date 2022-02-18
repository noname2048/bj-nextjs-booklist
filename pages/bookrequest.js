import styles from "../styles/Home.module.scss";
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>등록요청하기</h1>
      <div className={styles.search}>
        <span>isbn</span>
        <input type="text" />
      </div>
      <button>요청</button>
      <span>최근요청들</span>
    </div>
  );
}
