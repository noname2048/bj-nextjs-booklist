import Head from "next/head";
import Router, { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import IndexHeader from "../components/IndexHeader";
import { MdOutlineLocatior } from "react-icons/md";
import MainTwoSide from "../components/MainTwoSide";
import NewBookRequest from "../components/NewBookRequest";
import { GrTarget } from "react-icons/gr";

export default function Home() {
  const router = useRouter();
  const hash = router.asPath.match(/#([a-z0-9-_]+)/gi);
  let h = null;
  if (hash?.length > 0) {
    h = hash[0];
  } else {
    h = null;
  }

  return (
    <>
      <Head>
        <title>MyBooks</title>
        <meta name="description" content="you can display your books in home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <IndexHeader />
        {h === "#search" ? (
          <MainTwoSide />
        ) : h === "#newrequest" ? (
          <NewBookRequest />
        ) : (
          <MainTwoSide />
        )}
        <div className={styles["detail-search"]}>
          <div>
            상세 검색하기
            <GrTarget />
          </div>
        </div>
        <footer className={styles.footer}>
          <p>@ 2022</p>{" "}
          <p>해당 웹사이트는 알라딘 API를 이용하여 만들어졌습니다.</p>
          <p>sungwook.csw@gmail.com</p>
          <p>nextjs + fastapi</p>
        </footer>
      </div>
    </>
  );
}
