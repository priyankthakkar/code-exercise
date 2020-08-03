import React from "react";
import styles from "modules/shared/DropdownButton/DropdownButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export const DropdownButton = () => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.fuseDropdown}>
        <div className={styles.dropdownRadialContainer}>
          <button className={styles.dropdownButton}>Compose</button>
          <div className={styles.dropdownChevron}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
      <div className={styles.dropdownContent}>
        <button>Link 1</button>
        <button>Link 1</button>
        <button>Link 1</button>
      </div>
    </div>
  );
};
