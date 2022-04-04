import { useState, useEffect } from "react";
import styles from "./recent.module.scss";

export default function Page() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function myFetch() {
      const res = await fetch("http://localhost:8000/requests");
      const jsonData = await res.json();
      setData(jsonData);
    }
    try {
      myFetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h3>최근요청목록</h3>
      <div className={styles.rowContainer}>
        <ul className={styles.row}>
          <li className={`${styles.isbn} ${styles.cell}`}>isbn</li>
          <li className={`${styles.created_at} ${styles.cell}`}>created</li>
          <li className={`${styles.updated_at} ${styles.cell}`}>updated</li>
          <li className={`${styles.status} ${styles.cell}`}>status</li>
        </ul>
        {data
          ? data.map((item, idx) => (
              <ul key={idx} className={styles.row}>
                <li className={`${styles.isbn} ${styles.cell}`}>
                  {item?.isbn}
                </li>
                <li className={`${styles.created_at} ${styles.cell}`}>
                  {item?.created_at}
                </li>
                <li className={`${styles.updated_at} ${styles.cell}`}>
                  {item?.updated_at}
                </li>
                <li className={`${styles.status} ${styles.cell}`}>
                  {item?.status}
                </li>
              </ul>
            ))
          : null}
      </div>
    </div>
  );
}
