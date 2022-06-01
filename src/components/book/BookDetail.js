import styles from "./BookDetail.module.scss";
import Image from "next/image";

export default function BookDetail(props) {
  const { book, state } = props;
  const loading = book == undefined;

  if (loading) {
    return <section>loading...</section>;
  }
  if (state === 204) {
    return <section>waiting for new books register in DB...</section>;
  }

  if (state === 400) {
    return <section>error.</section>;
  }

  const imgSrc =
    book?.cover_type === "relative"
      ? `http://localhost:8000/bookimages/${book.cover}`
      : book?.cover;

  return (
    <section className={styles.BookDetail}>
      <Image
        src={imgSrc}
        alt={`image of ${book?.isbn}`}
        width="200"
        height="200"
      />
      <article>
        <h2>{book?.title}</h2>
        <p>{book?.description}</p>
        <ul>
          <li>
            <span>저자</span>
            {book?.price}
          </li>
          <li>
            <span>출판일</span>
            {book?.pub_date}
          </li>
          <li>
            <span>출판사</span>
            {book?.publisher}
          </li>
          <li>
            <span>가격</span>
            {book?.price}
          </li>
        </ul>
      </article>
    </section>
  );
}
