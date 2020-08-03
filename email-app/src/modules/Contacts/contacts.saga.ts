import { takeLatest, call, put } from "redux-saga/effects";
import { ContactsActionType } from "./contacts.actions";
import axios from "axios";

/**
 * @function
 * @name workerContactsSaga
 *
 * A function, acts as worker saga which loads contacts from mocked endpoint
 * and passes the contacts to contactsReducer by invoking SET_CONTACTS
 *
 * @returns {object, object} yields two different effects, 1st one to set contacts
 * retrieved and 2nd one to set the loading status
 */
export function* workerContactsSaga() {
  try {
    yield put({ type: ContactsActionType.IS_LOADING, payload: true });

    const result = yield call(axios.get, "http://localhost:4000/contacts");

    if (result && result.data && result.data.contacts) {
      yield put({
        type: ContactsActionType.SET_CONTACTS,
        payload: result.data.contacts,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put({ type: ContactsActionType.IS_LOADING, payload: false });
  }
}

/**
 * @function
 * @name watcherContactsSaga
 *
 * A watcher saga function, which is waiting for latest GET_CONTACTS action to be raised.
 * @return {object} - a saga effect object used by saga middleware to invoke worker saga.
 */
export function* watcherContactsSaga() {
  yield takeLatest(ContactsActionType.GET_CONTACTS, workerContactsSaga);
}
