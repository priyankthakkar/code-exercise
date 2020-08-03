import { ContactsActions, ContactsActionType } from "./contacts.actions";
import { ContactsState } from "./Contacts.interface";

export const defaultState: ContactsState = {
  isLoading: false,
  contactsResponse: {
    recordCount: 0,
    contacts: [],
  },
};

/**
 * @function
 * @name contactsReducer
 *
 * A reducer function that reduces given action and state. It updates the received
 * contacts and loading status to global state.
 *
 * @param state {ContactState} - current contacts state, if not passed it will use
 * the default application state.
 * @param action {ContactsActions} - contains the action that consists of type and
 * payload which is either {boolean} or {ContactsResponse} as payload
 *
 * @returns {ContactsState} - update state
 */
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
