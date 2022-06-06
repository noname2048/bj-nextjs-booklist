import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BookDetail from "../../components/book/BookDetail";
import TempbookDetail from "../../components/book/TempbookDetail";

const back = process.env.ORIGIN || "http://localhost:8000";

export default function Books(props) {
  const [bookdata, setBookdata] = useState(props.data);

  const fetchBook = async (isbn) => {
    const res = await fetch(`${back}/books/${isbn}`);
    const data = await res.json();
    setBookdata(data);
  };

  useEffect(() => {
    if (bookdata?.timestamp) {
      const timer = setTimeout(() => {
        fetchBook(props.isbn);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [props.isbn, bookdata]);

  return (
    <>
      {bookdata?.timestamp ? (
        <TempbookDetail book={bookdata} />
      ) : (
        <BookDetail book={bookdata} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { isbn } = context.query;
  const res = await fetch(`${back}/books/${isbn}`);
  const data = await res.json();
  return { props: { isbn: isbn, data: data } };
}
