import React from "react";
import styles from "modules/Task/Task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

const TaskToolbar = () => {
  return (
    <div className={styles.taskToolbarContainer}>
      <ul className={styles.taskToolbarList}>
        <li>
          <a href="#">All tasks</a>
        </li>
        <li>/</li>
        <li>
          <a className={styles.activeLink} href="#">
            Assigned to me
          </a>
        </li>
      </ul>
      <div className={styles.toolbarRightContainer}>
        <div className={styles.completionOptionContainer}>
          <FontAwesomeIcon className={styles.toggleOn} icon={faToggleOn} />
          <span className={styles.toggleText}>Show completed</span>
        </div>
        <div>
          <select className={styles.selectCss}>
            <option value="">Sort by...</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskToolbar;
