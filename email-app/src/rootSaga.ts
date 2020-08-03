import { all } from "redux-saga/effects";
import { watcherContactsSaga } from "modules/Contacts/contacts.saga";
import { watcherContentSaga } from "modules/Content/content.saga";

/**
 * rootSaga - combines all the watcher saga function with help of all
 * effect and passes them to saga middleware.
 */
export default function* rootSaga() {
  yield all([watcherContactsSaga(), watcherContentSaga()]);
}
