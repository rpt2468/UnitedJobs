/**
 * @author Pavneet Singh
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { getCats } from "../Api/catapi";

export default class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
    };
  }

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats() {
    this.setState({ refreshing: true });
    this.setState({ data: getCats, refreshing: false });
    // console.log("Cats",getCats);
    // getCats(10, 10) // 10 random results from 10th page
    //   .then(res => res.json())
    //   .then(resJson => {
    //     this.setState({ data: resJson, refreshing: false });
    //   }).catch(e => {
    //     console.log(e);
    //     this.setState({ refreshing: false });
    //   });
  }

  ItemSeparator = () => <View style={styles.separator} />;

  renderItemComponent = (data) => (
    <View style={styles.topview}>
      <TouchableOpacity style={styles.container}>
        <View
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "row",
              borderColor: "#EEEEEE" ,borderWidth:3 
            },
          ]}
        >
          <View style={{ flex: 1, }}>
            <Text>Image</Text>
          
          </View>
          <View style={{ flex: 4, backgroundColor: "white" }}>
            <Text style={styles.title}>Web Developer</Text>
          </View>
        </View>

        {/* */}
      </TouchableOpacity>
    </View>
  );
  handleRefresh = () => {
    this.setState({ refreshing: false }, () => {
      this.fetchCats();
    });
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItemComponent}
          keyExtractor={(item) => item.id.toString()}
          // ItemSeparatorComponent={this.ItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topview: {
    backgroundColor: "#FFF",
  },
  title: {
    color:"#212121",
    fontSize:20,
    fontWeight:"bold"
  },
  container: {
    height: 100,
    margin: 5,
    backgroundColor: "#FFF",
    borderRadius: 6,
    // borderColor: "#F4F6F9",
    // borderWidth: 1,

    // ...Platform.select({
    //   ios: {
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowColor: 'black',
    //     shadowOpacity: 0.8,
    //   },
    //   android: {
    //     elevation: 4,
    //   },
    // }),
  },
  image: {
    height: "100%",
    borderRadius: 4,
  },
  separator: {
    height: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginLeft: 10,
    marginRight: 10,
  },
});
