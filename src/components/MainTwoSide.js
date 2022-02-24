import styles from "./IndexMain.module.scss";
import { BsSearch } from "react-icons/bs";
import { FaBarcode } from "react-icons/fa";

export default function MainTwoSide() {
  return (
    <div className={styles.main}>
      <div>
        <h2>
          <span>제목</span>으로 검색하기
        </h2>
        <label>
          <input
            type="text"
            name=""
            id=""
            onKeyPress={(event) => {
              if (event.key == "Enter") Router.push("/titlesearch");
            }}
          />
          <BsSearch />
        </label>
      </div>
      <div>
        <h2>
          <span>ISBN</span>으로 검색하기
        </h2>
        <label>
          <input type="text" name="" id="" />
          <FaBarcode />
        </label>
      </div>
    </div>
  );
}
