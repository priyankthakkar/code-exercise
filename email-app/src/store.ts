import { AppState } from "app.interface";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddlewaer from "redux-saga";
import reducers from "./rootReducers";
import sagas from "./rootSaga";

export function createReduxStore(): Store<AppState> {
  const sagaMiddleware = createSagaMiddlewaer();

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);
  return store;
}
