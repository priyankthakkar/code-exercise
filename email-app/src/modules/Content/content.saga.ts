import { takeLatest, call, put } from "redux-saga/effects";
import { ContentActionType } from "./content.actions";
import axios from "axios";

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

export function* watcherContentSaga() {
  yield takeLatest(ContentActionType.GET_CONTENT, workerContentSaga);
}
