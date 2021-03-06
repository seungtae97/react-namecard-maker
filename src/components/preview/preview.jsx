import React from "react";
import styles from "./preview.module.css";
import Card from "../card/card";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h2 className={styles.title}>Preview</h2>
    <ul className={styles.list}>
      {Object.keys(cards).map((key) => {
        return <Card card={cards[key]} key={key} />;
      })}
    </ul>
  </section>
);

export default Preview;
