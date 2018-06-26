import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { View } from "react-native";
import KodiScreen from "./components/KodiScreen";
import NasScreen from "./components/NasScreen";

const RootStack = createStackNavigator(
  {
    Kodi: KodiScreen,
    Nas: NasScreen
  },
  {
    initialRouteName: "Kodi"
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <RootStack /> : <View />;
  }
}
