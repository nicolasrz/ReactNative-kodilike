import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';
import constants from './constants.js';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputIp: 'http://192.168.0.11',
      msg: ''
    }
  }

  onChangeIp = (ip) => {
    const goodIp = 'http://' + ip.replace(',', '.');
    this.setState({ inputIp: goodIp, msg: '' });
  }

  onPressConnect = () => {
    const uri = this.state.inputIp + constants.req.ping;
    console.log(uri);
    axios.get(uri).then(({ data }) => {
      if (data.result === 'pong') {
        this.setState({ msg: 'Connexion établie ! ' });
      } else {
        this.setState({ msg: 'Erreur durant la connexion' });
      }

    }).catch(err => {
      console.log(err)
      this.setState({ msg: 'Erreur durant la connexion' });
    })

  }
  render() {
    return (
      <View>
        <Text style={{ marginTop: 30 }}> Mettre l'adresse ip </Text>
        <TextInput
          style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, height: 50 }}
          keyboardType='numeric'
          onChangeText={this.onChangeIp}
          value={this.state.inputIp}
        />
        <Button
          onPress={this.onPressConnect}
          title="Se connecter à Kodi"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        {
          this.state.msg != '' ? (<Text style={{ marginTop: 50 }}>{this.state.msg}</Text>) : ''
        }

      </View>
    );
  }
}
