import styles from "./search.module.scss";

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
          verbose="ISBN"
          AnimeSvg={RiBarcodeFill}
          url="/isbnsearch"
          svg={BsSearch}
          backgroundColor="#98b4aa"
        />
        <CommonSearch
          verbose="제목"
          AnimeSvg={GoTextSize}
          url="/titlesearch"
          svg={BsSearch}
          backgroundColor="#74959a"
        />
      </div>
    </>
  );
}
