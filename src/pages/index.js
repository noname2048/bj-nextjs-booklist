import styles from "./index.module.scss";

import Head from "next/head";
import IndexHeader from "../components/IndexHeader";
import { MdOutlineLocatior } from "react-icons/md";
import MainTwoSide from "../components/MainTwoSide";
import NewBookRequest from "../components/NewBookRequest";
import { GrTarget } from "react-icons/gr";
import TitleSearch from "../components/search/TitleSearch";
import CommonSearch from "../components/search/CommonSearch";
import { BsSearch } from "react-icons/bs";

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
          key="title"
          url="/titlesearch"
          svg={BsSearch}
          backgroundColor="#74959a"
        />
        <CommonSearch
          verbose="ISBN"
          key="isbn"
          url="/isbnsearch"
          svg={BsSearch}
          backgroundColor="#98b4aa"
        />
      </div>
    </>
  );
}
