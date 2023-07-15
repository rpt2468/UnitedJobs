import React, { useEffect } from "react";
import { StyleSheet, ScrollView, View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { getTrendingRepo } from "../Store/Home/homeActions";

const Dashboard = ({
  status,
  errorMessage,
  items,
  getTrendingRepo: _getTrendingRepo,
}) => {
  useEffect(() => {
    console.log(" useEffect is called.");
    _getTrendingRepo();
    console.log("_getTrendingRepo called");
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.company}>{item.country.name} </Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.company}>Florida, Abcd</Text>
      <Text style={styles.company}>C#, Python</Text>
    </View>
  );

  return (
    <ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#f7f8f8",
        }}
      >
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
          style={styles.FlatList}
        ></FlatList>
      </View>
      {/* <Text>Dashbboard Item s</Text>
      <Text>API Calling Status : {status}</Text>
      {errorMessage !== "" && <Text>{errorMessage}</Text>}
      <Text>API Response :</Text>
      <Text>{JSON.stringify(items, null, 4)}</Text> */}
    </ScrollView>
  );
};

const mapStateToProps = ({ home }) => {
  const { status, errorMessage, items } = home;
  return {
    items,
    status,
    errorMessage,
  };
};

const styles = StyleSheet.create({
  FlatList: {
    marginHorizontal: 20,
    flex: 1,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    width: 350,
  },
  title: {
    color: "#97a7b2",
    fontWeight: "bold",
  },
  company: {
    color: "#97a7b2",
    marginVertical: 10,
  },
});

export default connect(mapStateToProps, { getTrendingRepo })(Dashboard);
