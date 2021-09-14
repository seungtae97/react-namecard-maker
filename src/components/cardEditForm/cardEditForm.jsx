import React from "react";
import Button from "../button/button";
import ImagesInput from "../imagesInput/imagesInput";
import styles from "./cardEditForm.module.css";
const CardEditForm = ({ card }) => {
  const { name, theme, company, title, email, message } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme">
        <option value={theme}>{theme}</option>
        <option value={theme}>{theme}</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.btn}>
        <ImagesInput />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
