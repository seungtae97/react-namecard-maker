import React from "react";
import styles from "./editer.module.css";
import CardEditForm from "../cardEditForm/cardEditForm";
import CardAddForm from "../cardAddForm/cardAddForm";

const Editer = ({ cards, addCard }) => (
  <section className={styles.editer}>
    <h2 className={styles.title}>Edeiter</h2>
    {cards.map((card) => {
      return <CardEditForm card={card} />;
    })}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editer;
