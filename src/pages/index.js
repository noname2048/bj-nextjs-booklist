import styles from "./index.module.scss";

import Head from "next/head";
import CommonSearch from "../components/search/CommonSearch";
import { BsSearch } from "react-icons/bs"; // search button
import { GoTextSize } from "react-icons/go"; // title anime
import { RiBarcodeFill } from "react-icons/ri"; //isbn anime

export default function Home() {
  return (
    <>
      <Head>
        <title>MyBooks</title>
        <meta name="description" content="you can display your books in home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <CommonSearch
          verbose="제목"
          AnimeSvg={GoTextSize}
          key="title"
          url="/titlesearch"
          svg={BsSearch}
          backgroundColor="#74959a"
        />
        <CommonSearch
          verbose="ISBN"
          AnimeSvg={RiBarcodeFill}
          key="isbn"
          url="/isbnsearch"
          svg={BsSearch}
          backgroundColor="#98b4aa"
        />
      </div>
    </>
  );
}
