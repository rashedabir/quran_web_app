import { combineReducers } from "redux";
import { surahReducer } from "./surahReducers";

const reducers = combineReducers({
  surahs: surahReducer,
});

export default reducers;
