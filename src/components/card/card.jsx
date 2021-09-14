import React from "react";
import styles from "./card.module.css";
const Card = ({ card }) => {
  const DEFAULT_IMAGE = "/mongle.png";
  const { name, theme, company, title, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.item} ${getStyles(theme)}`} key={card.id}>
      <div className={styles.profile}>
        <div className={styles.photo}>
          <img src={url} alt={name} />
        </div>
        <div className={styles.infomation}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.company}>{company}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    default:
      throw new Error(`알수 없는 테마:${theme}`);
  }
}

export default Card;
