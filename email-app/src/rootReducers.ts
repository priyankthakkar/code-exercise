import { contactsReducer } from "modules/Contacts/contacts.reducers";
import { combineReducers } from "redux";
import { AppState } from "app.interface";
import { contentReducer } from "modules/Content/content.reducers";

const reducer = combineReducers<AppState>({
  contactsData: contactsReducer,
  taskData: contentReducer,
});

export default reducer;
