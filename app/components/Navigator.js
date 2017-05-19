/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';

import icons from '../assets/icons';
import QrCade from '../components/QrCode';
import RealmList from '../components/RealmList';
import MovieListComponent from '../components/MovieList';
import styles from '../styles/Main';

import BaseComponet from './BaseComponent';

/**
 * 导航页
 */
export default class MyNavigator extends BaseComponet {

  constructor(props){
    super(props);

    this.state={
        selectedTab: 'Home',
    }
  }


  render() {
      return (
        <TabNavigator>
            { this.renderNavigatorItem("Home", icons.home, icons.home, 'Home' , MovieListComponent) }
            { this.renderNavigatorItem("Realm", icons.mine, icons.mine, 'Realm' , RealmList, 9) }
            { this.renderNavigatorItem("BarCodes", icons.mine, icons.mine, 'BarCodes' , QrCade) }
        </TabNavigator>
      );
  }

  /**
   * 导航item的封装
   * @param {*tab名称} title 
   * @param {*tab图标} ioncUri 
   * @param {*选中的tab图标} selectedIoncUri 
   * @param {*选中的tab标识} selectedTab 
   * @param {*包含的component} component 
   */
  renderNavigatorItem(title, ioncUri, selectedIoncUri, selectedTab, component, badgeText){
      return(
          <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                badgeText={badgeText}
                renderIcon={() => <Image source={{ uri: ioncUri}} style={ styles.tabImg} />}
                renderSelectedIcon={() => <Image source={{ uri: selectedIoncUri}} style={ styles.tabImg} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>

                <Navigator
                    initialRoute={{component: component}}
                    configureScene={(route, routeStack) => {
                        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                    }}
                    renderScene={(route, navigator) => {//将当前vavigator对象传递给下一组件
                        let Component=route.component;
                        return <Component navigator={navigator}  {...route.passProps} />;
                    }}/>
            </TabNavigator.Item>
      );
  }
}

