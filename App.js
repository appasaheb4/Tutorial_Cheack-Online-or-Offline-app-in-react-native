/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
import ConnectivityTracker from "react-native-connectivity-tracker";

let isNetwork;


const onConnectivityChange = (isConnected, timestamp, connectionInfo) => {
  console.log("connection state change");
  console.log("in netwroks status =" + isConnected);
  isNetwork = isConnected;
};

ConnectivityTracker.init({
  onConnectivityChange,
  attachConnectionInfo: false,
  onError: msg => console.log(msg)
  // verifyServersAreUp: () => store.dispatch(checkOurServersAreUp()),
});

export default class App extends Component {
  constructor(props) {
    super(props);

    console.log("network status =" + isNetwork);
  }

  componentDidMount() {
    if (!isNetwork) {
      this.dropdown.alertWithType(
        "info",
        "OH!!",
        "Sorry You're Not Connected to the Internet"
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <DropdownAlert ref={ref => (this.dropdown = ref)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
