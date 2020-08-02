import { all } from "redux-saga/effects";
import { watcherContactsSaga } from "modules/Contacts/contacts.saga";
import { watcherContentSaga } from "modules/Content/content.saga";

export default function* rootSaga() {
  yield all([watcherContactsSaga(), watcherContentSaga()]);
}
