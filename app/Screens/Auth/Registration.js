//Creating user  : https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
//Sending Email verification :
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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


  const handleSignUp = () => {
    console.log("Registration starting..");
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: fullName,
        });
        sendEmailVerification(userCredential.user);
        alert("email sent");
      })
      .then(() => {
        alert(auth)
        alert(auth.currentUser)
     alert(auth.currentUser.email)
        dispatch(
          userSignedIn({
            email: auth.currentUser.email,
            fullName: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

    }

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
