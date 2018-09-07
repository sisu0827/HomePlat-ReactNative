import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Home from './screens/home';
import Login from './screens/login';
import ForgotPwd from './screens/forgotpwd';
import Register from './screens/register';
import Verify from './screens/verify';
import License from './screens/license';
import Thankyou from './screens/thankyou';
import Dashboard from './screens/dashboard';
import Demo from './screens/demo';

export default class Root extends Component {
  renderScene(route, navigator) {
    var routeId = route.id;
    if(routeId == 'home') {
      var comp = 'Home';
      return (
        <Home navigator={navigator} />
      );
    }
    else if(routeId == 'login') {
      return (
        <Login navigator={navigator} />
      );
    }
    else if(routeId == 'forgotpwd') {
      return (
        <ForgotPwd navigator={navigator} />
      );
    }
    else if(routeId == 'register') {
      return (
        <Register navigator={navigator} />
      );
    }
    else if(routeId == 'verify') {
      return (
        <Verify navigator={navigator} />
      );
    }
    else if(routeId == 'license') {
      return (
        <License navigator={navigator} />
      );
    }
    else if(routeId == 'thankyou') {
      return (
        <Thankyou navigator={navigator} />
      );
    }
    else if(routeId == 'dashboard') {
      return (
        <Dashboard navigator={navigator} />
      );
    }
    else if(routeId == 'demo') {
      return (
        <Demo navigator={navigator} />
      );
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'dashboard'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
}
