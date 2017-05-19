/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';

import MyNavigator from './app/components/Navigator';
import BaseComponet from './app/components/BaseComponent';
import LoginComponent from './app/components/login/LoginComponent';

export default class TestProject extends BaseComponet {

  render() {
      return (
       <Navigator
          initialRoute={{component: LoginComponent}}
          configureScene={(route, routeStack) => {
              return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
          }}
          renderScene={(route, navigator) => {//将当前vavigator对象传递给下一组件
              let Component=route.component;
              return <Component navigator={navigator}  {...route.passProps} />;
          }}/>
      );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
