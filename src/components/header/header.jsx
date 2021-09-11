import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    <h1 className={styles.logo}>LOGO</h1>
    <h1 className={styles.title}>BUSINNESS CARD MAKER</h1>
    <div className={styles.etc}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
    </div>
  </header>
);

export default Header;
