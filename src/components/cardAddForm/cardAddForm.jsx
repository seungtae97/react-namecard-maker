import React, { useRef } from "react";
import Button from "../button/button";
import ImagesInput from "../imagesInput/imagesInput";
import styles from "./cardAddForm.module.css";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    onAdd(card);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option placeholder="dark">dark</option>
        <option placeholder="light">light</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.btn}>
        <ImagesInput />
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
