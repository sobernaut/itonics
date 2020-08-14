import { Action, State } from "../types";
import { ADD_RESULT, EDIT_RESULT } from "../actions";

const INITITAL_STATE: State = {
  byId: {},
  allIds: [],
}

const makPoints = (data) => {
  if (data.home_score === data.away_score) return null;
  else if (data.home_score > data.away_score) return data.home_club;
  return data.away_club;
}

export default function resultsReducer(state = INITITAL_STATE, action: Action) {
  switch(action.type) {
    case ADD_RESULT: {
      const id = Number(state.allIds[state.allIds.length - 1] || 0) + 1;
      return {
        ...state,
        allIds:  [...state.allIds, id],
        byId: {
          ...state.byId,
          [id]: {
            ...action.payload,
            status: makPoints(action.payload)
          },
        }
      }
    }
    case EDIT_RESULT: {
      const { id, ...rest } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            ...rest,
            status: makPoints(action.payload)
          }
        }
      }
    }
    default:
      return state;
  }
}
