import {StyleSheet} from 'react-native';
/**
 * 样式
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadText: {
    fontSize: 22,
    color: '#DC143C'
  },
  image: {
    height: 150,
    width: 99
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'rgba(111,22,55,0.4)'
  },
  rightContainer: {
    marginLeft: 10
  },
  rating: {
    color: '#DC143C',
    fontSize: 18
  },
  tabImg: {
    height: 25,
    width: 25
  },
  realmItemText: {
    height: 25,
    marginLeft: 10
  },
  realmItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#32eeaa',
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  realmItemLeft: {
    width: 100,
    backgroundColor: '#32eeaa'
  },
  realmItemRigth: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a2e4aa'
  },
  sendBroadcastBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#faf2e7',
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c18582'
  }
});

export {styles as default}