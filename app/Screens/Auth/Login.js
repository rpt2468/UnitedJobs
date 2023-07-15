import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import { userSignedIn } from "./../../Features/authSlice";
import styles from "./Styles";
import { useDispatch } from "react-redux";

import {} from "./../../Firebase/Config";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onFooterLinkPress = () => {
    //  navigation.navigate('Root', { screen: 'Registration' });
    navigation.navigate(Registration);
  };

  const onLoginPress = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          userSignedIn({
            email: userAuth.user.email,
            fullName: userAuth.user.displayName,
            uid: userAuth.user.uid,
          })
        );
        alert("user Logged In");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                /> */}
      <TextInput
        style={styles.input}
        placeholder="E-mails"
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
      <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
        <Text style={styles.buttonTitle}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Registration")}
            style={styles.footerLink}
          >
            Sign up
          </Text>
        </Text>

        <Text style={styles.footerText}>
          <Text
            onPress={() => navigation.navigate("ForgotPassword")}
            style={styles.footerLink}
          >
            Forgot your password
          </Text>
        </Text>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
}
