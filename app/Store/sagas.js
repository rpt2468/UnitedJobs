import { fork } from "redux-saga/effects";
import homeSagas from "./Home/homeSagas";

export default function* rootSaga() {
  yield fork(homeSagas);
}
