import React from "react";
import { MailBoxItemProps } from "./MailBox.interface";
import { getIconForMailBoxItem } from "modules/MailBox/mailBox.helper";
import styles from "modules/MailBox/MailBox.module.css";

const MailBoxItem: React.FC<MailBoxItemProps> = ({ item }) => {
  const { icon, isSelected, name, count } = item;
  return (
    <div className={styles.mailBoxItemContainer}>
      <div
        className={
          isSelected ? styles.mailBoxItemIconSelected : styles.mailBoxItemIcon
        }
      >
        {getIconForMailBoxItem(icon)}
      </div>
      <div className={styles.mailBoxItemText}>{name}</div>
      <div className={styles.mailBoxItemCount}>{count ? count : ""}</div>
    </div>
  );
};

export default MailBoxItem;
