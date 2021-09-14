import React from "react";
import styles from "./editer.module.css";
import CardEditForm from "../cardEditForm/cardEditForm";

const Editer = ({ cards }) => (
  <section className={styles.editer}>
    <h2 className={styles.title}>Edeiter</h2>
    {cards.map((card) => {
      return <CardEditForm card={card} />;
    })}
  </section>
);

export default Editer;
