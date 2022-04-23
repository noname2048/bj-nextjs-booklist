import styles from "./TitleSearch.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BookCard from "../card/BookCard";

export default function TitleSearch() {
  const router = useRouter();
  const q = router.query["q"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getJson = async () => {
      const res = await fetch(
        `http://localhost:8000/books/search/title?q=${q}`,
      );
      const json = await res.json();
      setData(json);
    };
    if (typeof q !== "undefined") getJson();
  }, [q]);

  if (!data) {
    return <>검색결과가 없습니다.</>;
  }
  return (
    <div className={styles.container}>
      {data.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
