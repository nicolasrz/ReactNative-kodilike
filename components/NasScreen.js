import React, { Component } from "react";
import { List, ListItem, Text, Left, Right, Icon } from "native-base";

import SimpleScreen from "./SimpleScreen";
import axios from "axios";
import constants from "../constants.js";

export default class NasScreen extends Component {
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
        console.log(data.result.sources);
        this.setState({ sources: data.result.sources });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <SimpleScreen tabActive="Nas">
        <List>
          <ListItem>
            <Left>
              <Text>Simon Mignolet</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Nathaniel Clyne</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Dejan Lovren</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </SimpleScreen>
    );
  }
}
