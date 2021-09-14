import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import Editer from "../editer/editer";
import Preview from "../preview/preview";
import Footer from "../footer/footer";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "teemo",
      company: "mongle",
      theme: "light",
      title: "Front-end Developer",
      email: "teemo@mongle.io",
      message: "Go Go!",
      fileName: "teemo",
      fileURL: "mongle.png",
    },
    {
      id: "2",
      name: "teemo",
      company: "mongle",
      theme: "dark",
      title: "Front-end Developer",
      email: "teemo@mongle.io",
      message: "Go Go!",
      fileName: "teemo",
      fileURL: null,
    },
    {
      id: "3",
      name: "teemo",
      company: "mongle",
      theme: "light",
      title: "Front-end Developer",
      email: "teemo@mongle.io",
      message: "Go Go!",
      fileName: "teemo",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.content}>
        <Editer cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
