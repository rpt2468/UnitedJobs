import React from "react";
import MainNavigator from "./app/Navigators/index";
import { Provider as StoreProvider } from "react-redux";
import store from "./app/Store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <MainNavigator />
    </StoreProvider>
  );
};
export default App;
