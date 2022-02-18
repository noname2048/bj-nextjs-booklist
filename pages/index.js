import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.compact}>
        <Head>
          <title>MyBooks</title>
          <meta
            name="description"
            content="you can display your books in home"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <logo className={styles.logo}>MyBooks</logo>
          <ul className={styles.centerButton}>
            <li className={styles.left}>Search</li>
            <li className={styles.right}>Request</li>
          </ul>
        </header>
        <div className={styles.main}>
          <div>
            <h2>
              <span>제목</span>으로 검색하기
            </h2>
            <input type="text" name="" id="" />
          </div>
          <div>
            <h2>
              <span>ISBN</span>으로 검색하기
            </h2>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className={styles["detail-search"]}>상세 검색하기</div>
        <footer className={styles.footer}>
          <p>@ 2022</p>{" "}
          <p>해당 웹사이트는 알라딘 API를 이용하여 만들어졌습니다.</p>
          <p>sungwook.csw@gmail.com</p>
        </footer>
      </div>
    </div>
  );
}
