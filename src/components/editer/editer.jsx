import React from "react";
import styles from "./editer.module.css";
import CardEditForm from "../cardEditForm/cardEditForm";
import CardAddForm from "../cardAddForm/cardAddForm";

const Editer = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editer;
