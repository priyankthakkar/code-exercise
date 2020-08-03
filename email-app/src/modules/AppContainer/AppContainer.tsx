import styles from "modules/AppContainer/AppContainer.module.css";
import Contacts from "modules/Contacts";
import Content from "modules/Content";
import MailBox from "modules/MailBox";
import React from "react";

/**
 * @function
 * @name AppContainer
 *
 * This component forms the main CSS grid which container 3 major container for
 * left nav, central content container and right contacts bar.
 *
 * @returns {JSX.Elment}
 */

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
