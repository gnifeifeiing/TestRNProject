import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Vibration,
  BackAndroid,
  Platform,
  Navigator,
} from 'react-native';

export default class BaseComponet extends Component {

  constructor(props) {  
    super(props);  
  } 

  componentWillMount() {
     if (Platform.OS === 'android') {
       BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
     }
   }

   componentWillUnmount() {
     if (Platform.OS === 'android') {
       BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
     }
   }

   onBackAndroid = () => {
     const nav = this.props.navigator;
     if(nav){
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
          nav.pop();
          return true;
        }
     }
     return false;
   }

}