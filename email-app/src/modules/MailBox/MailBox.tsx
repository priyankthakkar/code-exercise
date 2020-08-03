import React from "react";
import styles from "modules/MailBox/MailBox.module.css";
import MailBoxItemGroup from "./MailBoxItemGroup";
import { mailBoxConfig } from "modules/MailBox/mailBox.config";
import DropdownButton from "modules/shared/DropdownButton";

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
