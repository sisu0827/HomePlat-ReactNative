import React, { Component } from 'react';
import { Navigator, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Verify extends Component {
  constructor(props) {
    super(props);

  }
  verify() {
    this.props.navigator.push({
      id: 'license'
    })
  }
  renderScene() {
    return (
      <View style={styles.container}>
        <Image source={require('../icons/verify.png')} style={{width: 70, height: 70}} />
        <Text style={[styles.text, {marginTop: 20}]}>
          We are unable to auto-verify your mobile number.
        </Text>
        <Text style={styles.text}>
          please enter the code tested to +1 91234 56979
        </Text>
        <View style={styles.inputWrap}>
          <TextInput autoCapitalize='none' placeholder='ENTER OTP' style={styles.input} />
        </View>
        <TouchableOpacity onPress={this.verify.bind(this)} style={styles.submit}>
          <Text style={{color:'white', textAlign:'center', fontSize: 20}}>SUBMIT</Text>
        </TouchableOpacity>
        <View style={{flex:1, flexDirection:'row'}}>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>CHANGE NUMBER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>RESEND CODE</Text>
          </TouchableOpacity>
        </View>
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
  submit: {
    marginTop: 30,
    backgroundColor: 'black',
    height: 60,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  action: {
    height: 40,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: '#ccc',
  },
  actionText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  }
});

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <View style={{flex:1, flexDirection:'row', paddingLeft: 15}}>
          <Icon name="ios-arrow-round-back" style={{fontSize:30, fontWeight:'bold', color:'white'}} />
          <Text style={{color:'white',fontSize: 20, lineHeight: 30, marginLeft: 10}}>Verify Mobile</Text>
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
