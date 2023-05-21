import React from "react";
import ApplicationNavigator from "./app/Navigators/ApplicationNavigator";
import { Provider as StoreProvider } from "react-redux";
import store from "./app/Store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <ApplicationNavigator />
    </StoreProvider>
  );
};
export default App;
