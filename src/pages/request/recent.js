import { useState, useEffect } from "react";
// import useSWR from "swr";
// styles
import styles from "./recent.module.scss";
export default function Page() {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error } = useSWR("http://localhost:8000/requests", fetcher);

  // if (error) return <div>server error...</div>;
  // if (!data) return <div>loading...</div>;

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
    <>
      <div className={styles.container}>
        <h2>최근요청들</h2>
        {data
          ? data.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <label>isbn: {item?.isbn}</label>
                <label>created_at: {item?.created_at}</label>
                <label>updated_at: {item?.updated_at}</label>
                <label>status: {item?.status}</label>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
