import React, { Component } from 'react';
import { Navigator, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ForgotPwd extends Component {
  constructor(props) {
    super(props);

  }
  renderScene() {
    return (
      <View style={styles.container}>
        <Image source={require('../icons/oops.png')} style={{width: 60, height: 45}} />
        <Text style={[styles.text, {marginTop: 20}]}>
          Don't worry! Just enter your email ID below
        </Text>
        <Text style={styles.text}>
          and we'll send you the password reset instructions.
        </Text>
        <View style={styles.inputWrap}>
          <TextInput autoCapitalize='none' placeholder='PHONE NUMBER OR EMAIL' style={styles.input} />
        </View>
        <TouchableOpacity style={styles.reset}>
          <Text style={{color:'white', textAlign:'center', fontSize: 20}}>RESET PASSWORD</Text>
        </TouchableOpacity>
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
    backgroundColor: '#feec7c',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: .4
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 120,
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#363f45',
    fontSize: 14,
    fontFamily: 'Roboto-Regular'
  },
  inputWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#777',
    marginTop: 60
  },
  input: {
    color: '#555',
    width: 340,
    height: 30,
    fontSize: 12
  },
  reset: {
    marginTop: 30,
    backgroundColor: 'black',
    height: 60,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <View style={{flex:1, flexDirection:'row', paddingLeft: 15}}>
          <Icon name="ios-arrow-round-back" style={{fontSize:30, fontWeight:'bold', color:'white'}} />
          <Text style={{color:'white',fontSize: 20, lineHeight: 30, marginLeft: 10}}>Forgot password</Text>
        </View>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null;
  }
};
