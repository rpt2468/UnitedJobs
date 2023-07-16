import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../Screens/HomeScreen";
import MyJobs from "../Screens/MyJobs";
import Account from "../Screens/Account";
import Dashboard from "../Screens/Dashboard";
import ForgotPassword from "../Screens/Auth/ForgotPassword";
import JobList from "../Screens/JobList";
import JobDetails from "../Screens/JobDetails";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function JobStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={JobList} />
      <HomeStack.Screen name="Details" component={JobDetails} />
    </HomeStack.Navigator>
  );
}

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "#fcfcfc",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={JobStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="MyJobs"
        component={MyJobs}
        options={{
          tabBarLabel: "MyJobs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Account"
        component={ForgotPassword}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
export default TabNavigator;
