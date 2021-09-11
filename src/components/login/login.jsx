import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
