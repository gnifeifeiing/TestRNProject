/*
 * @Describe: 登录
 * @Author: lf
 * @Date: 2017-04-25 14:16:22
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-02 15:12:07
 */
import React, {Component} from 'react';

import {
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  Navigator,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Button,
  Switch,
  AsyncStorage
} from 'react-native';

import styles from '../../styles/login/LoginStyle';
import BaseComponent from '../BaseComponent';
import TitleBarView from '../../custom_view/TitleBarView';
import MyNavigator from '../Navigator';
import RealmModule from '../../utils/RealmModule';

export default class LoginComponent extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPwd: '',
      isMemoryPwd: true, //是否记住密码
    };

    //初始化Realm
    realm = RealmModule.getRealmModule();

    // 数据插入
    realm.write(() => {
      realm.create('user', {
        id: 1,
        name: 'zhangsan',
        pwd: 'SB001'
      });
      realm.create('user', {
        id: 2,
        name: 'lisi',
        pwd: 'SB002'
      });
      realm.create('user', {
        id: 3,
        name: 'wangwu',
        pwd: 'SB003'
      });
      realm.create('user', {
        id: 4,
        name: 'ceshi',
        pwd: '123456'
      });
      ToastAndroid.show('添加数据完成', ToastAndroid.SHORT);
    });
    AsyncStorage.getItem('isLogin', (error, result) => {
      if (!error) {
        if (result == 'true') {
          this
            .props
            .navigator
            .push({component: MyNavigator});
          // realm.close();
        }
      }
    });
  }

  /**
   * 登录判断操作
   */
  getUser() {
    let user = realm.objects('user');
    let u = user.filtered("name='" + this.state.userName + "' and pwd='" + this.state.userPwd + "'");
    if (u.length > 0) {
      this
        .props
        .navigator
        .push({component: MyNavigator});
      //存储登录状态
      AsyncStorage.setItem('isLogin', 'true', function (error) {
        if (error) {
          ToastAndroid.show("存储失败", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show("已登录", ToastAndroid.SHORT);
        }
      })

    } else {
      ToastAndroid.show("用户名或密码输入错误", ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBarView navigator={this.props.navigator} text="退出"/>
        <View style={styles.imgHeader}>
          <Image
            source={require('../../../images/login_top.png')}
            resizeMode={Image.resizeMode.stretch}/>
        </View>
        <View style={styles.body}>
          <View style={{
            flexDirection: 'row-reverse'
          }}>
            <Text
              style={{
              color: '#7EC0EE',
              marginLeft: 15,
              marginTop: 8,
              marginRight: 15,
              fontSize: 17
            }}>网络状态：WIFI已连接</Text>
          </View>
          <View style={styles.inputView}>
            <View style={{
              flexDirection: 'row'
            }}>
              <Image
                source={require('../../../images/username.png')}
                resizeMode={Image.resizeMode.stretch}
                style={styles.inputImage}/>
              <TextInput
                placeholder='用户名'
                underlineColorAndroid='transparent'
                style={styles.textInput}
                onChangeText={(userName) => this.setState({userName})}/>
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
              <Image
                source={require('../../../images/user_password.png')}
                resizeMode={Image.resizeMode.stretch}
                style={styles.inputImage}/>
              <TextInput
                placeholder='密码'
                secureTextEntry
                ={true}
                password={true}
                underlineColorAndroid='transparent'
                style={styles.textInput}
                onChangeText={(userPwd) => this.setState({userPwd})}/>
            </View>
          </View>
          <View
            style={{
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row-reverse',
            marginLeft: 15
          }}>
            <Text>记住密码</Text>
            <Switch
              value={this.state.isMemoryPwd}
              onValueChange={(value) => {
              this.setState({isMemoryPwd: value});
            }}/>
          </View>
          <View
            style={{
            marginLeft: 15,
            marginRight: 15
          }}>
            <Button
              onPress={() => {
              this.getUser();
            }}
              title="登录"
              color="#6495ED"/>
          </View>
        </View>
      </View>

    );
  }
}
