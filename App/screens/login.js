import React, { Component } from 'react';
import { Navigator, View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-checkbox';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true
    }
  }
  forgotPwd() {
    this.props.navigator.push({
      id: 'forgotpwd',
      index: 2
    });
  }
  renderScene() {
    return (
      <View style={{flex:1}}>
        <View style={styles.formTop}>
          <Text style={textStyles.appName}>HomePlate</Text>
          <View style={styles.authWrap}>
            <TextInput placeholder='                      Username' style={textStyles.auth} />
          </View>
          <View style={styles.authWrap}>
            <TextInput placeholder='                       Password' secureTextEntry={true} style={textStyles.auth} />
          </View>
        </View>
        <View style={styles.formBottom}>
          <View style={{width: 320,flex:1,flexDirection:'row',height: 30,justifyContent:'space-between',marginTop:20}}>
            <View style={{width: 150}}>
              <CheckBox
                label='Remember me'
                labelStyle={{color:"#d5d5db", fontSize: 14}}
                checked={this.state.check}
                onChange={(checked) => this.setState({check: !checked})}
              />
            </View>
            <TouchableOpacity onPress={this.forgotPwd.bind(this)} style={{marginTop:5}}>
              <Text style={{color:"#d5d5db", fontSize: 14}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[buttonStyles.login, {marginTop: 20}]}>
            <Text style={{color:'white', textAlign:'center', fontSize: 20}}>LOGIN</Text>
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
  formTop: {
    height: 230,
    marginTop: 100,
    alignItems: 'center',
  },
  formBottom: {
    marginTop: 50,
    height: 120,
    alignItems: 'center'
  },
  authWrap: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    marginTop: 40
  }
});
const textStyles = StyleSheet.create({
  appName: {
    fontFamily: 'SignPainter-HouseScript',
    color: 'black',
    fontSize: 48,
  },
  auth: {
    color: '#555',
    width: 320,
    height: 50,
    padding: 10,
  }
});
const buttonStyles = StyleSheet.create({
  login: {
    marginTop: 50,
    backgroundColor: 'black',
    width: 320,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <View style={{flex:1, flexDirection:'row', paddingLeft: 15}}>
          <Icon name="ios-arrow-round-back" style={{fontSize:30, fontWeight:'bold', color:'white'}} />
          <Text style={{color:'white',fontSize: 20, lineHeight: 30, marginLeft: 10}}>Login</Text>
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
