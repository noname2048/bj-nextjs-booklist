import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BookDetail from "../../components/book/BookDetail";

const back = process.env.ORIGIN || "http://localhost:8000";

export default function Books(props) {
  const router = useRouter();
  const param = router.query;

  const { isbn } = props;
  const [responseState, setResponseState] = useState();
  const [book, setBook] = useState();
  const [isError, setIsError] = useState(false);

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
  const res = await fetch(`${back}/book/${isbn}`);
  const data = await res.json();
  console.log(data);
  return { props: { book: data } };
}
