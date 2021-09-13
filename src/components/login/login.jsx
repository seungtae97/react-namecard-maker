import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: userId,
    });
  };
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
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
