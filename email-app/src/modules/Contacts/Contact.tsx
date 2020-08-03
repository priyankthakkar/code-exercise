import React from "react";
import { ConatctComponentProps } from "./Contacts.interface";
import styles from "modules/Contacts/Contact.module.css";
import Avatar from "modules/shared/Avatar";

/**
 * @function
 * @name Contact
 *
 * A functional component that displays details of a single contact.
 * @param {ConatctComponentProps} contact details passed a prop
 * @returns {JSX.Element}
 */
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
