import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Vibration,
  View
} from 'react-native';

import BarcodeScanner from 'react-native-barcodescanner';


export default class QrCode extends Component {

  constructor(props){
    super(props);

    this.state= {
      barcode: '',
      camertType: 'back',
      text: 'Scan Barcode',
      torchMode: 'off',
      type: '',
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1}}
          torchMode={this.state.torchMode}
          camertType={this.state.camertType}/>
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>{this.state.text}</Text>
          </View>
      </View>
    );
  }

  barcodeReceived(e){
    if(e.data !== this.state.barcode || e.type !==this.state.type){
      this.setState({
        barcode: e.data,
        text: `${e.data}(${e.type})`,
        type: e.type,
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  }
    
});