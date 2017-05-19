import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  body: {
    flex: 1,
    backgroundColor: '#E0EEEE'
  },
  inputView: {
    backgroundColor: '#fff',
    margin: 15
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    margin: 5,
    borderColor: '#DCDCDC',
    height: 36
  },
  inputImage: {
    marginLeft: 10,
    marginTop: 6,
    height: 25,
    alignSelf: 'center',
    width: 25
  },
  imgHeader: {
    height: 180,
    backgroundColor: '#60bce9',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export {styles as default}