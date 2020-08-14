import { createStore } from "redux";
import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
  // localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// });

export * from './types';
export * from './selectors';
export * from './actions';
