import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import teamsReducer from "./teamsReducer";


const rootReducer = combineReducers({
  results: resultsReducer,
  teams: teamsReducer,
})

export default rootReducer;
