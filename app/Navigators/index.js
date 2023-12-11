import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Dashboard from "../Screens/Dashboard";
import Account from "../Screens/Account";
import HomeScreen from "../Screens/HomeScreen";
import Registration from "../Screens/Auth/Registration";
import ForgotPassword from "../Screens/Auth/ForgotPassword";
import { authSlice } from "../Features/authSlice";
import LoginScreen from "../Screens/Auth/Login";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const usr = useSelector((state) => state.userAuth);
  const isSignedIn = false;
  return (
    <NavigationContainer>
      {usr?.user?.email != null ? (
        <>
          <TabNavigator />
        </>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </>
      )}
      <></>
    </NavigationContainer>
  );np
};

export default MainNavigator;
