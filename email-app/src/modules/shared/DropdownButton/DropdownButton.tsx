import React from "react";
import styles from "modules/shared/DropdownButton/DropdownButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * @function
 * @name DropdownButton
 *
 * A functional component that displays the dropdown button component.
 * The dropdown will be activated on hover of the cursor. As of now limiated to
 * 3 link items, but can be expanded to take props and form options on the fly.
 *
 * @returns {JSX.Element}
 */
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
