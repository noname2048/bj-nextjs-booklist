import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function TitleSearch() {
  const router = useRouter();
  const q = router.query["q"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getJson = async () => {
      const res = await fetch(
        `http://localhost:8000/books/search/title?q=${q}`,
      );
      const json = await res.json();
      setData(json);
    };
    if (typeof q !== "undefined") getJson();
  }, [q]);

  return <>{JSON.stringify(data)}</>;
}
