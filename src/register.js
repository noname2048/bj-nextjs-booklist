import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const onClick = () => {
    async function fetchRegister() {
      const response = await fetch("http://localhost:8000/user/register", {
        headers: { "Content-Type": "application/www-x-form-urlencoded" },
        method: "POST",
        body: `email=${email}&password=${password}`,
      });
      const json = await response.json();
      console.log(json);
    }
    if (password === passwordConfirm) {
      fetchRegister();
    } else {
      console.log("password not match");
    }
  };
  return (
    <>
      abcdefg
      <label>
        email
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        password
        <input
          type="password"
          name="password"
          id=""
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password_confirm">
        password confirm
        <input
          type="password"
          name="password_confirm"
          id=""
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </label>
      <button onClick={onClick}>register</button>
    </>
  );
}
