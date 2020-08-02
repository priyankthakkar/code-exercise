import { ContactsState } from "modules/Contacts/Contacts.interface";
import { ContentState } from "modules/Content/Content.interface";

export interface AppState {
  contactsData: ContactsState;
  taskData: ContentState;
}
