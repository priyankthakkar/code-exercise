import React from "react";
import MailBoxItem from "./MailBoxItem";
import { MailBoxItemGroupProps } from "./MailBox.interface";
import styles from "modules/MailBox/MailBox.module.css";

const MailBoxItemGroup: React.FC<MailBoxItemGroupProps> = ({ groupItems }) => {
  return (
    <div className={styles.mailBoxItemGroup}>
      {groupItems.map((item) => (
        <MailBoxItem item={item} />
      ))}
    </div>
  );
};

export default MailBoxItemGroup;
