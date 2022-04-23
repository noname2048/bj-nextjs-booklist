import styles from "./BookCard.module.scss";
import Image from "next/image";
import { useEffect } from "react";

const loader = ({ src }) => {
  if (!src)
    return "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
  return `https://job-book-image.s3.ap-northeast-2.amazonaws.com/${src}.jpg`;
};

export default function BookCard(props) {
  const { book } = props;
  const fake = !RegExp(/\d{13}/).test(book.isbn13);

  useEffect(() => {
    console.log(fake);
  }, [fake]);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          loader={loader}
          src={`${book.isbn13}`}
          alt={`${book.isbn13}.jpg`}
          layout="fill"
        />
      </div>

      <ul>
        <li>
          <span>title: </span>
          {book.title}
        </li>
        <li>
          <span>isbn13: </span>
          {book.isbn13}
        </li>
      </ul>
    </div>
  );
}
