import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BookDetail from "../../components/book/BookDetail";

const back = process.env.ORIGIN || "http://localhost:8000";

export default function Books(props) {
  const [book, setBook] = useState(props.book);
  const [isError, setIsError] = useState(props.book?.is_error);
  const [responseState, setResponseState] = useState();

  async function fetchBooks(isbn) {
    try {
      const response = await fetch(back + `/book/${isbn}`);
      if (response.ok) {
        const json = response.json();
        setBook(json);
        setResponseState(response.status);
        console.log(book);
      }
    } catch (err) {
      setResponseState(400);
    }
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetchBooks(isbn);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [responseState, isbn]);

  console.log(props);
  return <>HI{/* <BookDetail book={book} state={responseState} /> */}</>;
}

export async function getServerSideProps(context) {
  const { isbn } = context.query;
  try {
    const res = await fetch(`${back}/books/${isbn}`);
    const data = await res.json();
    if (res.status === 204) {
      return { props: { book: data, type: "tempbook" } };
    }
    return { props: { book: data, type: "book" } };
  } catch (error) {
    return { props: { book: { isbn: isbn, is_error: true }, type: "error" } };
  }
}
