import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
import Editer from "../editer/editer";
import Preview from "../preview/preview";
import Footer from "../footer/footer";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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

    2: {
      id: "2",
      name: "teemo",
      company: "mongle",
      theme: "dark",
      title: "Front-end Developer",
      email: "teemo@mongle.io",
      message: "Go Go!",
      fileName: "teemo",
      fileURL: "mongle.png",
    },
    3: {
      id: "3",
      name: "teemo",
      company: "mongle",
      theme: "light",
      title: "Front-end Developer",
      email: "teemo@mongle.io",
      message: "Go Go!",
      fileName: "teemo",
      fileURL: "mongle.png",
    },
  });

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

  const updateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.content}>
        <Editer
          cards={cards}
          addCard={updateCard}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
