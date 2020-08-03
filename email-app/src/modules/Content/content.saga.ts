import { takeLatest, call, put } from "redux-saga/effects";
import { ContentActionType } from "./content.actions";
import axios from "axios";

/**
 * @function
 * @name workerContentSaga
 *
 * A function, acts as worker saga which loads content from mocked endpoint
 * and passes the contacts to contactsReducer by invoking SET_CONTENT
 *
 * @returns {object, object} yields two different effects, 1st one to set content
 * retrieved and 2nd one to set the loading status
 */
export function* workerContentSaga() {
  try {
    yield put({ type: ContentActionType.IS_LOADING, payload: true });

    const result = yield call(axios.get, "http://localhost:4000/tasks");
    console.log(result.data);
    if (result && result.data) {
      yield put({
        type: ContentActionType.SET_CONTENT,
        payload: result.data,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put({ type: ContentActionType.IS_LOADING, payload: false });
  }
}

/**
 * @function
 * @name watcherContentSaga
 *
 * A saga function that waits for the GET_CONTENT action to be raised.
 *
 * @return {object} - a saga effect object used by saga middleware to invoke worker saga.
 */
export function* watcherContentSaga() {
  yield takeLatest(ContentActionType.GET_CONTENT, workerContentSaga);
}
