import React from "react";
import { ConatctComponentProps } from "./Contacts.interface";
import styles from "modules/Contacts/Contact.module.css";
import Avatar from "modules/shared/Avatar";

const Contact: React.FC<ConatctComponentProps> = ({ contact }) => {
  const { avatar, firstName, lastName, conversationCount } = contact;

  return (
    <>
      <Avatar src={avatar} alt={`${firstName} ${lastName}`} />
      <div
        className={styles.contactNameContainer}
      >{`${firstName} ${lastName}`}</div>
      <div className={styles.conversationCountContainer}>
        {conversationCount}
      </div>
    </>
  );
};

export default Contact;
