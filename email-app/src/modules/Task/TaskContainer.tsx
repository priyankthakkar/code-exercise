import React from "react";
import { TaskData } from "modules/Content/Content.interface";
import TaskDetails from "./TaskDetails";
import styles from "modules/Task/Task.module.css";
export const TaskContainer: React.FC<{ taskData: TaskData }> = ({
  taskData,
}) => {
  return (
    <>
      <div className={styles.taskTitle}>{taskData.range}</div>
      {taskData.tasks.map((task) => (
        <TaskDetails task={task} />
      ))}
    </>
  );
};
