import React from "react";
import styles from "./App.module.css";
import Header from "modules/header/Header";
import AppContainer from "modules/AppContainer/AppContainer";

/**
 * @function
 * @name App
 *
 * A function component that connects header and app container to form the page.
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <AppContainer />
    </div>
  );
}

export default App;
