'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SideMenu = require('react-native-side-menu');

var {Component} = React;
var {
  Navigator,
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} = ReactNative;

class FirstPage extends Component {
    render() {
      return (
        <View style={styles.page}><Text style={styles.pageContent}>First Page</Text></View>
      );
  }
}

class FirstPageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
        this.props.navigator.replace({ id: item });
    }

    render() {

        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

        return (
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton onPress={() => this.toggle()}/>
                <FirstPage/>
            </SideMenu>
        );
    }
};

class MenuNavigator extends Component {

  constructor(props) {
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
  }

  renderScene(route, nav) {
    switch (route.id) {
      case 'first':
        return <FirstPageMenu navigator={nav} />;
      case 'second':
        return <SecondPageMenu navigator={nav} />;
      case 'third':
        return <ThirdPageMenu navigator={nav} />;
      default:
        return <FirstPageMenu navigator={nav} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{id: 'first'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  _setNavigatorRef(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;

      if (navigator) {
        var callback = (event) => {
          console.log(
            `NavigatorMenu: event ${event.type}`,
            {
              route: JSON.stringify(event.data.route),
              target: event.target,
              type: event.type,
            }
          );
        };
        // Observe focus change events from the owner.
        this._listeners = [
          navigator.navigationContext.addListener('willfocus', callback),
          navigator.navigationContext.addListener('didfocus', callback),
        ];
      }
    }
  }
};

class MenuButton extends Component {

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <View style={styles.menuButton} >
        <TouchableOpacity
          onPress={this.handlePress.bind(this)}
          style={this.props.style}>
          <Text>{this.props.children}</Text>
          <Image
            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 40, height: 40, }} />
        </TouchableOpacity>
      </View>
    );
  }
}

class Menu extends Component {

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
  }

  render() {

    return (

      <ScrollView scrollsToTop={false} style={styles.menu}>

        <Text
          onPress={() => this.props.onItemSelected('first')}
          style={styles.item}>
          First
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('second')}
          style={styles.item}>
          Second
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('third')}
          style={styles.item}>
          Third
        </Text>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
    menuButton: {
        marginTop: 20,
        backgroundColor: '#777'
    },
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 20,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#777'
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
    },
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 20,
  },
});

module.exports = MenuNavigator;
