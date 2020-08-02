import React from "react";
import { Task } from "modules/Content/Content.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCheckCircle,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "modules/Task/Task.module.css";
import ReactTooltip from "react-tooltip";
import Avatar from "modules/shared/Avatar";

const TaskDetails: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <div
      className={
        task.isCompleted
          ? styles.taskDetailsContainerCompleted
          : styles.taskDetailsContainer
      }
    >
      <div className={styles.checkboxContainer}>
        <FontAwesomeIcon
          className={
            task.isSelected ? styles.isSelectedActive : styles.isSelected
          }
          icon={faCheckSquare}
        />
      </div>
      <div className={styles.checkboxContainer}>
        <FontAwesomeIcon
          className={
            task.isCompleted ? styles.isCompletedActive : styles.isCompleted
          }
          icon={faCheckCircle}
        />
      </div>
      <ReactTooltip
        className={styles.tooltipStyle}
        place={"top"}
        type={"info"}
        effect={"float"}
        multiline={false}
      />
      <div data-tip={task.assignee} className={styles.taskTitleContainer}>
        <span>{task.assignee}</span>
      </div>
      <div className={styles.taskDescriptionContaer}>
        <span>{task.text}</span>
      </div>
      <div className={styles.avatarContainer}>
        <Avatar src={task.avatar} alt={task.assignee} />
      </div>
      <div className={styles.taskTitleContainer}>
        <span>{task.assignee}</span>
      </div>
      <div className={styles.commonTextContainer}>{task.duration}</div>
      <div className={styles.isStaredContainer}>
        <FontAwesomeIcon
          className={task.isStared ? styles.isStaredActive : styles.isStared}
          icon={faStar}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
