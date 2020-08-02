import { ContactsActions, ContactsActionType } from "./contacts.actions";
import { ContactsState } from "./Contacts.interface";

export const defaultState: ContactsState = {
  isLoading: false,
  contactsResponse: {
    recordCount: 0,
    contacts: [],
  },
};

export function contactsReducer(
  state: ContactsState = defaultState,
  action: ContactsActions
): ContactsState {
  const { type } = action;

  switch (type) {
    case ContactsActionType.SET_CONTACTS:
      // @ts-ignore
      return { ...state, contactsResponse: action.payload };
    case ContactsActionType.IS_LOADING:
      // @ts-ignore
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
