import React from "react";
import  { useSelector } from "react-redux";
import { Text, TextInput, TouchableOpacity,View } from "react-native";

export default function HomeScreen() {
  const usr = useSelector((state) => state.userAuth)
  return (
    
    <View>
    {(usr != null && usr.user != null && usr.user.email != null)  ? (
        <>
        <Text>  User Present {usr.user.email} </Text>
        </>
      ) : (
        <>
        <Text> User not Present </Text>
        </>

    )}
    </View>
    )
}
