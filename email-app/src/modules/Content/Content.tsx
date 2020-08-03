import React, { useEffect } from "react";
import styles from "modules/Content/Content.module.css";
import * as contentActions from "modules/Content/content.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "app.interface";
import TaskContainer from "modules/Task";
import TaskToolbar from "modules/Task/TaskToolbar";
import Loader from "react-loader-spinner";

/**
 * @function
 * @name Content
 *
 * A functional component that forms the content container to render the tasks
 * in the current case.
 *
 * @returns {JSX.Element}
 */
export const Content = () => {
  const dispatch = useDispatch();

  const { isLoading, tasksResponse } = useSelector(
    (state: AppState) => state.taskData
  );

  let content: any = <></>;

  if (isLoading) {
    content = (
      <div className={styles.contentLoaderSpinner}>
        <Loader visible={isLoading} type={"Rings"} />
      </div>
    );
  } else if (tasksResponse && tasksResponse.taskData) {
    content = tasksResponse.taskData.map((taskData) => (
      <TaskContainer taskData={taskData} />
    ));
  }

  useEffect(() => {
    dispatch(contentActions.getContent());
  }, [dispatch]);

  return (
    <div className={styles.contentContainer}>
      <TaskToolbar />
      {content}
    </div>
  );
};
