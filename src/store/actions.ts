import { Result, Action } from "./types";

export const ADD_RESULT = 'add_result';
export const EDIT_RESULT = 'edit_result';

export const addResult = (result: Result): Action => ({
  type: ADD_RESULT,
  payload: result
});

export const editResult = (result: Result): Action => ({
  type: EDIT_RESULT,
  payload: result,
});
