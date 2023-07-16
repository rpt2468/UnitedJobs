import React from "react";
import useEffect from "react";
import {
  Image,
  Text,
  Pressable ,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Button } from "react-native-web";

export default function JobDetails(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={[
            styles.box,
            {
              flex: 1,
              textAlign: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              alignSelf: "center",
              marginTop: 10,
            }}
            source={{
              uri: "https://cdn.wfp.org/guides/ui/v1.0.0/assets/logos/emblem/wfp-logo-emblem-blue.png",
            }}
          />
          <Text style={styles.title}>
            {/* {props.route.params.jobId} */}
            Web Developer
            <br />
          </Text>
          <Text style={styles.blue}>United Nations</Text>
          <br />
          <View style={styles.separator} />
          <br />
          <Text style={styles.subtext}>
            Cairo,Egypt • Full time • Last Date: 14th July{" "}
          </Text>
          <br />
        </View>
        <View>
          <View
            style={[
              styles.box,
              {
                flex: 1,
              },
            ]}
          >
            <Text style={styles.blue}>Job Description</Text>

            <Text style={{ fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

        
          </View>
          <Pressable
              style={styles.button}
              onPress={() => alert("Button with adjusted color pressed")}
            >
              <Text style={styles.buttontext}>Apply</Text>
            </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#246BFD",
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  box: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20,
    backgroundColor: "white",
    borderRadius: 10,
    minHeight: 10,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  blue: {
    color: "#246BFD",
    fontSize: 19,
  },
  title: {
    color: "#212121",
    fontSize: 16,
    fontWeight: "500",
    margin: 4,
  },
  subtext: {
    color: "#9E9E9E",
    margin: 3,
    fontWeight: "400",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
    borderRadius: 6,
    minHeight: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginLeft: 20,
    marginRight: 20,
  },
});
