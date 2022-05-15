import styles from "./request.module.scss";
import { useState, useEffect } from "react";
import BookCard from "../components/card/BookCard";

export default function Page(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:8000/books");
        const json = await res.json();
        setBooks(json);
        setLoading(false);
        return json;
      } catch (err) {
        setError(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <>로딩중입니다</>;
  if (error) return <>에러발생!</>;

  return (
    <div className={styles.container}>
      {books ? (
        books.map((item, idx) => {
          return <BookCard key={idx} book={item} />;
        })
      ) : (
        <div> 검색결과가 없습니다.</div>
      )}
    </div>
  );
}
