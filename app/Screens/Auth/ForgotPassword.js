import React from "react";
import { View } from "react-native-web";
import { Button, TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./Styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function () {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset Email sent.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error." + error.message);
      });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="E-mails"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleResetPassword()}
      >
        <Text style={styles.buttonTitle}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}
