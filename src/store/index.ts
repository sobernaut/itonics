import { createStore } from "redux";
import rootReducer from "./reducers";
import { setItem, getItem, throttle } from "../utils";
import { STATE_KEY } from "../constants";

const persistedState = getItem(STATE_KEY);
export const store = createStore(
  rootReducer,
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  setItem(STATE_KEY, store.getState());
}, 1000));


export * from './types';
export * from './selectors';
export * from './actions';
