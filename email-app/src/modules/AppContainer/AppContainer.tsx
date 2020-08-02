import React from "react";
import styles from "modules/AppContainer/AppContainer.module.css";
import MailBox from "modules/MailBox";
import Contacts from "modules/Contacts";
import Content from "modules/Content";

const AppContainer = () => {
  return (
    <div className={styles.appContainer}>
      <MailBox />
      <Content />
      <Contacts />
    </div>
  );
};

export default AppContainer;
