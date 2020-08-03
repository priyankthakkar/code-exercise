import {
  INBOX,
  STARRED,
  SENT,
  ALL_EMAILS,
  ALL_TASKS,
  ASSIGNED_TO_ME,
  NOTES,
  TEMPLATES,
  ANNOUNCEMENTS,
  DARFTS,
  SPAM,
} from "./mailBox.helper";

export const mailBoxConfig = [
  [
    {
      name: "Inbox",
      count: 12,
      isSelected: false,
      icon: INBOX,
    },
    {
      name: "Starred",
      count: 2,
      isSelected: false,
      icon: STARRED,
    },
    {
      name: "Sent",
      count: 0,
      isSelected: false,
      icon: SENT,
    },
    {
      name: "All Emails",
      count: 12,
      isSelected: false,
      icon: ALL_EMAILS,
    },
  ],
  [
    {
      name: "All tasks",
      count: 0,
      isSelected: true,
      icon: ALL_TASKS,
    },
    {
      name: "Assigned to me",
      count: 8,
      isSelected: false,
      icon: ASSIGNED_TO_ME,
    },
  ],
  [
    {
      name: "Notes",
      count: 0,
      isSelected: false,
      icon: NOTES,
    },
    {
      name: "Templates",
      count: 0,
      isSelected: false,
      icon: TEMPLATES,
    },
  ],
  [
    {
      name: "Announcements",
      count: 8,
      isSelected: false,
      icon: ANNOUNCEMENTS,
    },
  ],
  [
    {
      name: "Drafts",
      count: 2,
      isSelected: false,
      icon: DARFTS,
    },
    {
      name: "Spam",
      count: 0,
      isSelected: false,
      icon: SPAM,
    },
    {
      name: "Trash",
      count: 0,
      isSelected: false,
      icon: SPAM,
    },
  ],
];
