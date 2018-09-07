import React, { Component } from 'react';
import { Navigator, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null
    }
  }
  componentWillMount() {
    this.setState({interval: setInterval(() => {
      this.setState({position: this.state.position == 2 ? 0 : this.state.position + 1});
    }, 5000)});
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  login() {
    this.props.navigator.push({
      id: 'login',
      index: 1
    });
  }
  apply() {
    this.props.navigator.push({
      id: 'register',
      index: 3
    });
  }
  renderScene(route, navigator) {
    return (
    <ScrollView style={{flex:1}}>
      <ImageSlider
        images={[
          'http://localhost:3000/assets/images/slide1.jpg',
          'http://localhost:3000/assets/images/slide2.jpg',
          'http://localhost:3000/assets/images/slide3.jpg'
        ]}
        height={450}
        position={this.state.position}
      />
      <View style={styles.slider}>
        <Text style={textStyles.appName}>HomePlate</Text>
        <Text style={textStyles.appDesc}>YOUR ON-DEMAND CHEF APP</Text>
        <Text></Text>
        <Text></Text>
        <Text style={textStyles.appTitle}>Become a chef</Text>
        <Text style={textStyles.appTitle}>earn money daily</Text>
      </View>
      <View style={styles.content}>
        <Text style={textStyles.contentHeader}>
          Welcome to Homeplate
        </Text>
        <Text></Text>
        <Text style={textStyles.contentText}>
          Lorem ipsum dolor ste amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={this.login.bind(this)} style={[buttonStyles.login, {marginRight:20}]}>
            <Text style={{color:'white', textAlign:'center', fontSize: 20}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.apply.bind(this)} style={[buttonStyles.login, {backgroundColor:'#feec7c'}]}>
            <Text style={{color:'white', textAlign:'center', fontSize: 20}}>APPLY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    );
  }
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }
}
const styles = StyleSheet.create({
  slider: {
    height: 450,
    backgroundColor: 'rgba(120,120,120, 0.8)',
    marginTop: -450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const textStyles = StyleSheet.create({
  appName: {
    fontFamily: 'SignPainter-HouseScript',
    color: 'white',
    fontSize: 48,
  },
  appDesc: {
    fontFamily: 'OpenSans-Light',
    color: '#feec7c',
    fontSize: 16,
    letterSpacing: 2
  },
  appTitle: {
    fontFamily: 'Georgia',
    color: 'white',
    fontSize: 30,
    letterSpacing: 1
  },
  contentHeader: {
    fontFamily: 'Roboto-Light',
    fontSize: 20,
    color: '#0a0a0a'
  },
  contentText: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    color: '#353b3e',
    paddingLeft: 25,
    paddingRight: 25,
    lineHeight: 20,
    textAlign: 'center'
  }
});
const buttonStyles = StyleSheet.create({
  login: {
    marginTop: 50,
    backgroundColor: 'black',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
