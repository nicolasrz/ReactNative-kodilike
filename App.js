import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import FolderScreen from './components/FolderScreen';
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Folder: FolderScreen
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {
  render() {
    return <RootStack />
  }

}
