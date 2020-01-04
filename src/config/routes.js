import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'native-base';

import Main from '~/pages/Main';
import Restaurants from '~/pages/Restaurants';
import Profile from '~/pages/Profile';

const Routes = createAppContainer(
  createMaterialBottomTabNavigator(
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
      activeColor: '#57C710',
      inactiveColor: '#1d1d1d',
      shifting: true,
      barStyle: {
        backgroundColor: '#fff',
      },
      backBehavior: true,
    },
  ),
);

export default Routes;
