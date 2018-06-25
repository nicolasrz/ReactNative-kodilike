import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";
import constants from "../constants.js";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputIp: "http://192.168.0.11",
      msg: ""
    };
  }

  onChangeIp = ip => {
    const goodIp = "http://" + ip.replace(",", ".");
    this.setState({ inputIp: goodIp, msg: "" });
  };

  onPressConnect = () => {
    const uri = this.state.inputIp + constants.req.ping;

    axios
      .get(uri)
      .then(({ data }) => {
        if (data.result !== "pong") {
          this.setState({ msg: "Erreur durant la connexion" });
        } else {
          this.props.navigation.navigate("Folder", {
            ip: this.state.inputIp
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ msg: "Erreur durant la connexion" });
      });
  };
  render() {
    const Dimensions = require("Dimensions");
    const window = Dimensions.get("window");
    const tiers = window.height / 3;
    const four = window.width / 4;
    const width2 = window.width / 2;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            width: window.width,
            height: window.height,
            backgroundColor: "powderblue",
            borderWidth: 1,
            borderColor: "powderblue",
            padding: 10
          }}
        >
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Bienvenue sur l'app KodiLike
          </Text>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Adresse de Kodi
          </Text>
          <TextInput
            style={{
              marginTop: 20,
              backgroundColor: "white",
              height: 25
            }}
            keyboardType="numeric"
            onChangeText={this.onChangeIp}
            value={this.state.inputIp}
          />
          <Button onPress={this.onPressConnect} title="Se connecter à Kodi" />
          {this.state.msg != "" ? (
            <Text style={{ marginTop: 50 }}>{this.state.msg}</Text>
          ) : (
            ""
          )}
        </View>
      </View>
    );
  }
}
