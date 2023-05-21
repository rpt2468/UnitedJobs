import { combineReducers } from "redux";
import HomeReducer from "./Home/homeReducer";

export default combineReducers({
  home: HomeReducer,
});
