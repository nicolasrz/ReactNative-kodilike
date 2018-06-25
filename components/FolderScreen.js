import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import axios from "axios";
import constants from "../constants.js";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      ip: this.props.navigation.getParam("ip")
    };
    const getFoldersUri = this.state.ip + constants.req.our_folders;
    axios
      .get(getFoldersUri)
      .then(({ data }) => {
        this.setState({ sources: data.result.sources });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onPress = file => {
    const uriStartFileCollection =
      this.state.ip +
      constants.req.file_collection_start +
      file +
      constants.req.file_collection_end;
    axios
      .get(uriStartFileCollection)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { sources } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {sources.length > 0
          ? sources.map(source => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignSelf: "stretch",
                    flexDirection: "row",
                    backgroundColor: "powderblue",
                    margin: 10,
                    padding: 10,
                    borderRadius: 20
                  }}
                  key={source.label}
                >
                  <Button
                    style={{ fontSize: 25 }}
                    title={source.label}
                    onPress={() => this.onPress(source.file)}
                  />
                </View>
              );
            })
          : ""}
      </View>
    );
  }
}
