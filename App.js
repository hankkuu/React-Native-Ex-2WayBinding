import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ChildComponent from './ChildComponent';
import ParentComponent from './ParentComponent';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <Stack style={{flex : 1}} />
    );
  }

}

const Stack = createStackNavigator({
  parent: { screen: ParentComponent },
  child: { screen: ChildComponent }
}, {
  initialRouteName : 'parent'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
