import React from "react";
import styles from "modules/MailBox/MailBox.module.css";
import MailBoxItemGroup from "./MailBoxItemGroup";
import { mailBoxConfig } from "modules/MailBox/mailBox.config";
import DropdownButton from "modules/shared/DropdownButton";

/**
 * @function
 * @name MailBox
 * A functional component that forms the left navigation component.
 * As of now it assumes the config from mailBox.config.ts
 *
 * @returns {JSX.Element}
 */
export const MailBox = () => {
  return (
    <div className={styles.mailBoxContainer}>
      <DropdownButton />
      {mailBoxConfig.map((itemGroup) => (
        <MailBoxItemGroup groupItems={itemGroup} />
      ))}
    </div>
  );
};
