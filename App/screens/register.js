import React, { Component } from 'react';
import { Navigator, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }
  renderScene() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <TextInput autoCapitalize='none' placeholder='FIRST NAME' style={styles.input} />
          </View>
          <View style={styles.inputWrap}>
            <TextInput autoCapitalize='none' placeholder='LAST NAME' style={styles.input} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.inputWrap, {flex:1}]}>
            <TextInput autoCapitalize='none' placeholder='EMAIL' style={[styles.input, {width: 250}]} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.inputWrap, {width: 70, flexDirection:'row', justifyContent:'space-between'}]}>
            <Image source={require('../icons/flag.png')} style={{width: 24, height: 16, marginTop: 7}} />
            <TextInput autoCapitalize='none' value='+1' editable={false}
              style={[styles.input, {textAlign: 'right', width: 20}]} />
          </View>
          <View style={[styles.inputWrap, {width: 250}]}>
            <TextInput autoCapitalize='none' placeholder='MOBILE' style={styles.input} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.inputWrap, {flex:1}]}>
            <TextInput autoCapitalize='none' secureTextEntry={true} placeholder='PASSWORD'
              style={[styles.input, {width: 250}]} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.submit}
            onPress={() => this.props.navigator.push({
              id: 'verify',
              index: 4
            })}
          >
            <Text style={{color:'white', textAlign:'center', fontSize: 20}}>SUBMIT</Text>
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
    height: 400,
    marginTop: 80,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  inputWrap: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaa',
  },
  input: {
    color: '#555',
    fontSize: 12,
    width: 150,
    height: 30,
  },
  submit: {
    marginTop: 70,
    backgroundColor: 'black',
    height: 50,
    width: 300,
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
          <Text style={{color:'white',fontSize: 20, lineHeight: 30, marginLeft: 10}}>Register</Text>
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
