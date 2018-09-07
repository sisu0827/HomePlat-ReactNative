import React, { Component } from 'react';
import { Navigator, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Thankyou extends Component {
  constructor(props) {
    super(props);

  }
  renderScene() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 30}]}>Thank you</Text>
        <Text style={[styles.text, {fontSize: 30}]}>For signing up!</Text>
        <Text style={[styles.text, {fontSize: 18, fontStyle: 'italic', marginTop: 20, marginBottom: 40}]}>Please allow up to 24-48 hours for review</Text>
        <Text style={[styles.text, {fontSize: 18}]}>You will receive an email with your login</Text>
        <Text style={[styles.text, {fontSize: 18}]}>information!</Text>
      </View>
    );
  }
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={styles.navigator}
                routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  navigator: {
    backgroundColor: 'black',
    height: 75,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#1b1c1b',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'OpenSans-Light'
  },
  appName: {
    fontFamily: 'SignPainter-HouseScript',
    color: 'white',
    fontSize: 42,
    marginTop: -2
  }
});

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style={styles.appName}>HomePlate</Text>
    );
  }
};
