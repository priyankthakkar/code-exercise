import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faInbox,
  faPaperPlane,
  faEnvelopeSquare,
  faUserCircle,
  faCheckCircle,
  faStickyNote,
  faScroll,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

/**
 * @function
 * @name getIconForMailBoxItem
 *
 * A font awesome svg icon will be returned based on the give iconKey.
 * @param {string} iconKey - string key identifyin icon uniquely.
 *
 * @returns {JSX.Element} - A font awesome svg icon.
 */
export const getIconForMailBoxItem = (iconKey: string) => {
  switch (iconKey) {
    case INBOX:
      return <FontAwesomeIcon icon={faInbox} />;
    case STARRED:
      return <FontAwesomeIcon icon={faStar} />;
    case SENT:
      return <FontAwesomeIcon icon={faPaperPlane} />;
    case ALL_EMAILS:
      return <FontAwesomeIcon icon={faEnvelopeSquare} />;
    case ALL_TASKS:
      return <FontAwesomeIcon icon={faCheckCircle} />;
    case ASSIGNED_TO_ME:
      return <FontAwesomeIcon icon={faUserCircle} />;
    case NOTES:
      return <FontAwesomeIcon icon={faStickyNote} />;
    case TEMPLATES:
      return <FontAwesomeIcon icon={faScroll} />;
    case ANNOUNCEMENTS:
      return <FontAwesomeIcon icon={faComment} />;
    case DARFTS:
    case SPAM:
    case TRASH:
      return <></>;
  }
};

export const INBOX = "inbox";
export const STARRED = "starred";
export const SENT = "sent";
export const ALL_EMAILS = "allEmails";
export const ALL_TASKS = "allTasks";
export const ASSIGNED_TO_ME = "assignedToMe";
export const NOTES = "notes";
export const TEMPLATES = "templates";
export const ANNOUNCEMENTS = "announcements";
export const DARFTS = "darfts";
export const SPAM = "spam";
export const TRASH = "trash";
