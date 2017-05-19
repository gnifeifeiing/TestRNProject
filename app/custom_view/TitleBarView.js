import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  BackAndroid,
} from 'react-native';

import MyNavigator from '../components/Navigator';
import MovieListComponent from '../components/MovieList';

class TitleBarView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <View style={styles.container}> 
          <TouchableOpacity onPress={
                  () => {
                    if(this.props.navigator.getCurrentRoutes().length <= 1){
                      BackAndroid.exitApp();
                    }else{
                      this.props.navigator.pop();
                    }
                  }
                }>
            <View style={styles.imageView}>  
                  <Image style={styles.imageStyle} source={require('../../images/actionbar_return.png')}></Image>  
            </View>   
          </TouchableOpacity>
          <View style={styles.textView}>  
              <Text style={styles.textStyle}>{this.props.text || "标题头"}</Text>  
          </View>  
      </View> 
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

const styles = StyleSheet.create({  
    container: {  
        flexDirection: 'row',  
        alignItems: 'center',  
        height: 45,  
        alignSelf: 'stretch',  
        backgroundColor: '#60bce9',  
    },  
    imageView: {
        alignSelf: 'center', 
    },
    textView: {  
        alignSelf: 'center',  
    },  
    textStyle: {  
        fontSize: 18,  
        color: '#fff',  
        textAlign: 'center',  
    },  
    imageStyle: {
        flex: 1,
        width: 50,
        height: 45,
        marginTop: 8,
        marginBottom: 8,
    }
});  

export default TitleBarView;
