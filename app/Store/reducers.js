import { combineReducers } from "redux";
import HomeReducer from "./Home/homeReducer";
import authSlice from "../Features/authSlice";

export default combineReducers({
  home: HomeReducer,
  userAuth: authSlice
});
