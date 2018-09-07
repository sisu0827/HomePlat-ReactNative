import React, { Component } from 'react';
import { Navigator, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import SideMenu from 'react-native-side-menu';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

var Tile = React.createClass({
  getDefaultProps() {
    return {
      height: 225,
      opacity: 0.28,
      selected: false
    };
  },
  render() {
    return (
      <View style={[styles.tileWrap, {alignSelf:'stretch', height: this.props.height}]}>
        <Image source={{uri: this.props.img}} style={[styles.tileImage, {width: WIDTH, height: this.props.height}]}>
          <View style={[styles.tileContent, {backgroundColor:`rgba(44,50,57,${this.props.opacity})`, height: this.props.height}]}>
            <Text style={styles.tileName}>{this.props.name}</Text>
            <Text style={styles.course}>{this.props.course} Course</Text>
          {this.props.selected ? (
            <TouchableOpacity onPress={() => {}} style={[styles.button,{backgroundColor:'#fcec7c'}]}>
              <Text style={styles.buttonText}>SELECTED</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}>UN-SELECTED</Text>
            </TouchableOpacity>
          )}
          </View>
        </Image>
      </View>
    );
  }
});
var Notice = React.createClass({
  getDefaultProps() {
    return {
      counter: 0
    };
  },
  render() {
    return (
      <TouchableOpacity style={{marginRight:30}} onPress={() => {}}>
        <Image source={require('../icons/mixer.png')} style={{width:40,height:40}}>
        </Image>
        {this.props.counter > 0 &&
          <View style={{position:'absolute',top:0,left:28,width:18,height:18,justifyContent:'center',borderWidth:0,padding:0,borderRadius:10,backgroundColor:'#fcec7c'}}>
            <Text style={{fontSize:12,fontWeight:'bold',padding:0,textAlign:'center',backgroundColor: 'rgba(0,0,0,0)'}}>{this.props.counter}</Text>
          </View>
        }
      </TouchableOpacity>
    );
  }
});
var MenuIcon = React.createClass({
  render() {
    return (
      <TouchableOpacity style={{marginLeft: 20}} onPress={() => this.props.onPress()}>
        <Image source={require('../icons/menu.png')} style={{width:30,height:30}} />
      </TouchableOpacity>
    );
  }
});
class Menu extends Component {
  constructor(props) {
      super(props);
      console.log(props);
  }

  render() {
    return (
      <View style={menuStyle.container} scrollsToTop={true}>
        <Text style={menuStyle.close}>&times;</Text>
      </View>
    );
  }
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    const self = this;

    this.NavigationBarRouteMapper = {
      LeftButton(route, navigator, index, navState) {
        return (
          <MenuIcon ref={(menuIcon) => this.menuIcon=menuIcon} onPress={self.toggleMenu.bind(self)} />
        );
      },
      RightButton(route, navigator, index, navState) {
        return (
          <Notice counter="1" />
        );
      },
      Title(route, navigator, index, navState) {
        return (
          <Text style={styles.appName}>HomePlate</Text>
        );
      }
    }
  }
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  renderScene(route, navigator) {
    return (
      <ScrollView style={styles.container}>
        <Tile img='http://localhost:3000/assets/images/dish1.jpg' name='The Italian' course='1' selected={true} />
        <Tile img='http://localhost:3000/assets/images/dish2.jpg' name='Le Frenchy' course='3' />
        <Tile img='http://localhost:3000/assets/images/dish3.jpg' name='Americano' course='2' selected={true} />
        <Tile img='http://localhost:3000/assets/images/dish4.jpg' name='Pizza' course='5' />
        <Tile img='http://localhost:3000/assets/images/dish5.jpg' name='Burger' course='4' selected={true} />
      </ScrollView>
    );
  }
  render() {
    const menu = <Menu />;

    return (
      <SideMenu
        menu={menu}
        openMenuOffset={3/4 * WIDTH}
        isOpen={this.state.menuOpen}
        onChange={(menuOpen) => this.setState({ menuOpen, })}
      >
        <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={styles.navigator}
                  routeMapper={this.NavigationBarRouteMapper} />
          }
        />
      </SideMenu>
    );
  }
}
const styles = StyleSheet.create({
  navigator: {
    backgroundColor: 'black',
    height: 75,
    padding: 0,
    margin: 0,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    marginTop: 75,
  },
  appName: {
    fontFamily: 'SignPainter-HouseScript',
    color: 'white',
    fontSize: 42,
    marginTop: -2
  },
  tileWrap: {

  },
  tileImage: {

  },
  tileContent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2c3239',
    paddingTop: 70,
    alignItems: 'center',
    padding: 30
  },
  tileName: {
    fontFamily: 'Georgia',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  course: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'white'
  },
  button: {
    marginTop: 15,
    backgroundColor: 'black',
    height: 60,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color:'white',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcec7c',
    padding: 10
  },
  close: {
    fontSize: 40,
    fontWeight: '100'
  }
});
