import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../Screens//HomeScreen";
import MyJobs from "../Screens/MyJobs.js";
import Account from "../Screens/Account";

const Tab = createBottomTabNavigator();

export function MainNavigator() {
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
        component={HomeScreen}
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
        component={Account}
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
export default MainNavigator;
