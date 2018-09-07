import React, { Component } from 'react';
import { Navigator, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class License extends Component {
  constructor(props) {
    super(props);

  }
  thankyou() {
    this.props.navigator.push({
      id: 'thankyou'
    });
  }
  renderScene() {
    return (
      <ScrollView style={{flex: 1,flexDirection: 'column', marginTop: 120}} contentContainerStyle={{alignItems:'center'}}>
        <Text style={[styles.text, {fontSize: 20, color: 'black'}]}>We need the following</Text>
        <Text style={[styles.text, {fontSize: 20, color: 'black'}]}>information to verify you are who</Text>
        <Text style={[styles.text, {fontSize: 20, color: 'black'}]}>you say you are (:</Text>
        <Image source={require('../icons/license.png')} style={{width: 244, height: 180, marginTop: 30}} />
        <View style={[styles.inputWrap, {marginTop: 20}]}>
          <TextInput autoCapitalize='none' placeholder='LICENSE NUMBER' style={styles.input} />
        </View>
        <View style={styles.inputWrap}>
          <TextInput autoCapitalize='none' placeholder='ISSUED ON' style={styles.input} />
        </View>
        <View style={styles.inputWrap}>
          <TextInput autoCapitalize='none' placeholder='EXPIRY DATE' style={styles.input} />
        </View>
        <TouchableOpacity style={styles.submit} onPress={this.thankyou.bind(this)}>
          <Text style={{color:'white', textAlign:'center', fontSize: 20}}>SUBMIT APPLICATION</Text>
        </TouchableOpacity>
      </ScrollView>
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
  text: {
    textAlign: 'center',
    color: '#363f45',
    fontSize: 14,
    fontFamily: 'Roboto-Regular'
  },
  inputWrap: {
    borderBottomWidth: 0.5,
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
    marginBottom: 50,
    backgroundColor: 'black',
    height: 60,
    width: 300,
    justifyContent: 'center',
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
