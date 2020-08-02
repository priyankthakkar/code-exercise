import { ActionType, createAction } from "typesafe-actions";
import { ContactsResponse } from "./Contacts.interface";

export enum ContactsActionType {
  GET_CONTACTS = "GET_CONTACTS",
  SET_CONTACTS = "SET_CONTACTS",
  IS_LOADING = "IS_LOADING",
}

export const getContacts = createAction(ContactsActionType.GET_CONTACTS)<
  void
>();

export const setContacts = createAction(ContactsActionType.SET_CONTACTS)<
  ContactsResponse
>();

export const setLoading = createAction(ContactsActionType.IS_LOADING)<
  boolean
>();

const actions = {
  getContacts,
  setContacts,
  setLoading,
};

export type ContactsActions = ActionType<typeof actions>;
