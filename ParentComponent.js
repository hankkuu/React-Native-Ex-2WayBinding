import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ChildComponent from './ChildComponent';
import { createStackNavigator } from 'react-navigation';

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: 'change your comment'
    }
  }
  static navigationOptions = {
      header: null
  }

  render() {
    const { navigation } = this.props;
    let { comment } = this.state;
    const updateComment = navigation.getParam('text', '')
    console.log(updateComment);
    if(updateComment !== '') {
        comment = updateComment
    }   

    return (
      <View style={styles.container}>
        <Text style={styles.title} >Parent Component</Text>
        <Text>change your comment : {comment}</Text>
        <Button title='go child' onPress={() => this.props.navigation.navigate('child') } ></Button>
        <ChildComponent updatecomment={this._changecomment} >
        </ChildComponent>        
      </View>
    );
  }

  _changecomment = (text) => {
    this.setState({
      comment: text
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30,
  },
});
