import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'native-base';

import NavigationService from './navigationService';
import Sidebar from '~/components/Sidebar';

// Tabs Pages
import Main from '~/pages/Tabs/Main';
import Restaurants from '~/pages/Tabs/Restaurants';
import Profile from '~/pages/Tabs/Profile';

// Stack Pages
import Intro from '~/pages/Stack/Intro';
import SignInEmail from '~/pages/Stack/SignIn/Email';
import SignInPassword from '~/pages/Stack/SignIn/Password';
import Plate from '~/pages/Stack/Plate';

const Tabs = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        gestureResponseDistance: {
          horizontal: -1,
          vertical: -1,
        },
        tabBarLabel: 'Início',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="food"
            type="MaterialCommunityIcons"
            style={{color: tintColor, fontSize: 25}}
          />
        ),
      }),
    },
    Restaurants: {
      screen: Restaurants,
      navigationOptions: () => ({
        gestureResponseDistance: {
          horizontal: -1,
          vertical: -1,
        },
        tabBarLabel: 'Restaurantes',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="restaurant"
            type="MaterialIcons"
            style={{color: tintColor, fontSize: 20}}
          />
        ),
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        gestureResponseDistance: {
          horizontal: -1,
          vertical: -1,
        },
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="account"
            type="MaterialCommunityIcons"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Main',
    activeColor: '#2DBB54',
    inactiveColor: '#1d1d1d',
    shifting: true,
    barStyle: {
      backgroundColor: '#fff',
    },
    backBehavior: true,
    animationEnabled: false,
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Tabs,
  },
  {
    contentComponent: Sidebar,
    drawerBackgroundColor: '#FFF',
    drawerWidth: 300,
    animationEnabled: false,
  },
);

const Stack = createSwitchNavigator(
  {
    Tabs: {
      screen: Tabs,
    },
    Intro: {
      screen: Intro,
    },
    SignInEmail: {
      screen: SignInEmail,
    },
    SignInPassword: {
      screen: SignInPassword,
    },
    Plate: {
      screen: Plate,
    },
  },
  {
    index: 0,
    initialRouteName: 'Intro',
    headerMode: 'none',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      animationEnabled: false,
    },
  },
);

const TopLevelNavigator = createSwitchNavigator(
  {
    Tabs,
    DrawerNavigator,
    Stack,
  },
  {
    navigationOptions: {
      gestureResponseDistance: {
        horizontal: -1,
        vertical: -1,
      },
    },
    animationEnabled: false,
    gestureEnabled: false,
    initialRouteName: 'Stack',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(TopLevelNavigator);

/**
 *
 *
 * @class Routes
 * @extends {Component}
 */
class Routes extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default Routes;
