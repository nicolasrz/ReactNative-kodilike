import React, { Component } from "react";
import SimpleScreen from "./SimpleScreen";
import { Form, Item, Input, Label, Button, Text } from "native-base";
import axios from "axios";
import constants from "../constants.js";

export default class KodiScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputIp: "http://192.168.0.11",
      msg: ""
    };
  }

  onChangeIp = () => {
    const goodIp = this.state.ip.replace(",", ".");
    console.log(goodIp);
    this.setState({ inputIp: goodIp });
  };

  onPressConnection = () => {
    const uri = this.state.inputIp + constants.req.ping;
    axios
      .get(uri)
      .then(({ data }) => {
        if (data.result !== "pong") {
          this.setState({ msg: "Erreur durant la connexion" });
        } else {
          this.props.navigation.navigate("Nas", {
            ip: this.state.inputIp,
            tabActive: "Nas"
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ msg: "Erreur durant la connexion" });
      });
  };

  render() {
    return (
      <SimpleScreen tabActive="Kodi">
        <Form>
          <Item fixedLabel>
            <Label>Adresse ip</Label>
            <Input onChangeText={this.onChangeIp} value={this.state.inputIp} />
          </Item>
          <Button full info onPress={this.onPressConnection}>
            <Text>Se connecter à Kodi</Text>
          </Button>
        </Form>
        {this.state.msg != "" ? <Text>{this.state.msg}</Text> : ""}
      </SimpleScreen>
    );
  }
}
