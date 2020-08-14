import { Action, State } from "../types";
import { NORMALIZED_TEAM } from '../../constants';

export default function teamsReducer(state: State = NORMALIZED_TEAM, action: Action) {
  switch(action.type) {
    default:
      return state;
  }
}
