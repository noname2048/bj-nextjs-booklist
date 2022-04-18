import { useState } from "react";
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    console.log("click login");
    fetch("http://localhost:8000/users/token", {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${username}&password=${password}`,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <h2>login</h2>
      <label htmlFor="username">
        <input type="username" />
      </label>
      <label htmlFor="password">
        <input type="password" name="" id="" />
      </label>
      <button onClick={onClickLogin}>login</button>
    </>
  );
}
