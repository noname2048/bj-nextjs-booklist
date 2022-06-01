import styles from "./ISBNLanding.module.scss";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";

const ISBN_EXAMPLE = "979-11-5839-098-3";
const ISBN_PATTERN = new RegExp(/^(\d[- ]*){13}$/gm);
const checkISBN = (isbn) => {
  return ISBN_PATTERN.test(isbn);
};
const convertISBN = (isbn) => {
  return isbn.replace(/[- ]/g, "");
};
export default function ISBNLanding() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState();

  return (
    <div className={styles.ISBNLanding}>
      <h2>
        ISBN으로 검색하기 <BsSearch />
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const temp = inputValue || ISBN_EXAMPLE;
          if (checkISBN(temp)) {
            const isbn = convertISBN(temp);
            router.push(`/books/${isbn}`);
          } else {
            console.log("not valid");
          }
        }}
      >
        <input
          type="text"
          placeholder={ISBN_EXAMPLE}
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button>search</button>
      </form>
    </div>
  );
}
