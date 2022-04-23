import styles from "./BookCard.module.scss";
import Image from "next/image";
const loader = () => `http://localhost:8000/${src}`;

export default function BookCard(props) {
  const { book } = props;
  return (
    <div className={styles.container}>
      {/* <Image src={book.isbn13}></Image> */}
      <div className={styles.fakeImage}></div>
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
