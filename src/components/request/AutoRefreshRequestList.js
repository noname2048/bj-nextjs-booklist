import styles from "./AutoRefreshRequestList.js";
import { useState, useEffect } from "react";

export default function AutoRefreshRequestList() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return <div className={styles.container}></div>;
}
