import { AppState } from "app.interface";
import * as contactsActions from "modules/Contacts/contacts.actions";
import styles from "modules/Contacts/Contacts.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

export const Contacts = () => {
  const dispatch = useDispatch();

  const { isLoading, contactsResponse } = useSelector(
    (state: AppState) => state.contactsData
  );

  useEffect(() => {
    dispatch(contactsActions.getContacts());
  }, [dispatch]);

  let contactsContent: any = <></>;

  if (isLoading) {
    contactsContent = (
      <div className={styles.contactLoader}>
        <Loader visible={isLoading} type={"Rings"} />
      </div>
    );
  } else if (contactsResponse && contactsResponse.recordCount > 0) {
    contactsContent = contactsResponse.contacts.map((contact) => {
      return (
        <div className={styles.contactContainer} key={contact.id}>
          <Contact contact={contact} />
        </div>
      );
    });
  }

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsTitleContainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faFolder} />
        </div>
        <div className={styles.activeIconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
        </div>
      </div>
      <div className={styles.contacts}>{contactsContent}</div>
    </div>
  );
};
