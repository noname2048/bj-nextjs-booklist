import styles from "../styles/Home.module.scss";

export default function NewBookRequest() {
  return (
    <div className={styles.newrequest}>
      <h1>등록요청하기</h1>
      <div className={styles.form}>
        <span>isbn</span>
        <label>
          <input type="text" />
          <span>검색</span>
        </label>
      </div>
      <button>요청</button>
    </div>
  );
}
