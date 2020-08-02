import { takeLatest, call, put } from "redux-saga/effects";
import { ContactsActionType } from "./contacts.actions";
import axios from "axios";

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

export function* watcherContactsSaga() {
  yield takeLatest(ContactsActionType.GET_CONTACTS, workerContactsSaga);
}
