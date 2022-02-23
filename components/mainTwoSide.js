import styles from "../styles/Home.module.scss";

export default function MainTwoSide() {
  return (
    <div className={styles.main}>
      <div>
        <h2>
          <span>제목</span>으로 검색하기
        </h2>
        <input
          type="text"
          name=""
          id=""
          onKeyPress={(event) => {
            if (event.key == "Enter") Router.push("/titlesearch");
          }}
        />
      </div>
      <div>
        <h2>
          <span>ISBN</span>으로 검색하기
        </h2>
        <input type="text" name="" id="" />
      </div>
    </div>
  );
}
