/*
 * @Describe: 功能描述
 * @Author: lf
 * @Date: 2017-04-25 16:43:20
 * @Last Modified by: lf
 * @Last Modified time: 2017-05-02 14:05:42
 */
import React, {Component} from 'react';

import {
  Text,
  View,
  ListView,
  Image,
  ToastAndroid,
  ScrollView
} from 'react-native';

import styles from '../styles/Main';
import LoadingView from '../custom_view/LoadingView';
import RealmModule from '../utils/RealmModule';

class RealmList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };

    //初始化Realm
    realm = RealmModule.getRealmModule();

    //数据插入
    realm.write(() => {
      realm.create('Contact', {
        id: 1,
        name: '张三',
        dept: 'SB001',
        phone: '17692919292'
      });
      realm.create('Contact', {
        id: 2,
        name: '李四',
        dept: 'SB002',
        phone: '13692919321'
      });
      realm.create('Contact', {
        id: 3,
        name: '王五',
        dept: 'SB003',
        phone: '18692919452'
      });
      realm.create('Contact', {
        id: 4,
        name: '张六',
        dept: 'SB004',
        phone: '18692932453'
      });
      realm.create('Contact', {
        id: 5,
        name: '理七',
        dept: 'SB005',
        phone: '13592919292'
      });
      ToastAndroid.show('添加数据完成', ToastAndroid.SHORT);
    });

    //查询所有数据
    cars = realm.objects('Contact');
    // realm.close();
  }

  renderContact(contact) {
    return (
      <View style={styles.container}>
        <Text>contact.name</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          {cars.map((value, key) => {
            return (
              <View key={key} style={styles.realmItem}>
                <View style={styles.realmItemLeft}>
                  <Text style={styles.realmItemText}>{value.name}</Text>
                  <Text style={styles.realmItemText}>{value.dept}</Text>
                </View>
                <View style={styles.realmItemRigth}>
                  <Text>{value.phone}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );

  }

}

export {RealmList as default}
