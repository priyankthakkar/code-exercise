import React from "react";
import MailBoxItem from "./MailBoxItem";
import { MailBoxItemGroupProps } from "./MailBox.interface";
import styles from "modules/MailBox/MailBox.module.css";

/**
 * @function
 * @name MailBoxItemGroup
 *
 * A function component that forms a group for the given mailbox items.
 * @param {MailBoxItem[]} props - An array of MailBoxItems which are part of one group.
 *
 * @returns {JSX.Element}
 */
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
