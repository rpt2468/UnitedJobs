import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "./reducers";
import HomeReducer from "./Home/homeReducer";
import rootSaga from "./sagas";
import authReducer from "./../Features/authSlice";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer : {
    homeReducer : HomeReducer,
    userAuth : authReducer
  }
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
