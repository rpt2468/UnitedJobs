import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TextInput, TouchableOpacity,View } from "react-native";
import { useDispatch } from "react-redux";

import {} from "./../../Firebase/Config";
import styles from "./Styles";
import { userSignedIn } from "./../../Features/authSlice";
import store from "../../Store";

export default function Registration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  const auth = getAuth();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log("gil...");
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  const handleSignUp = () => {
    console.log("Registration starting..");
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: fullName,
        })
          .then(() => {
            dispatch(
              userSignedIn({
                email: userAuth.user.email,
                fullName: userAuth.user.displayName,
                uid: userAuth.user.uid,
              })
            );
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onStatusCheckPress = () => {
    const user = auth.currentUser;
    if (user == null) alert("No User found.");
    else alert(user.email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
        <Text style={styles.buttonTitle}>Create account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onStatusCheckPress()}
      >
        <Text style={styles.buttonTitle}>Check User Status</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.footerLink}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
