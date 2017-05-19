import {StyleSheet} from 'react-native';
/**
 * 样式
 */
const MovieDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: 'rgba(111,22,55,0.4)'
  },
  titleText: {
    fontSize: 22,
    color: '#436EEE'
  },
  titleBtn: {
    fontSize: 22,
    color: '#436EEE',
    marginLeft: 20
  },
  leftImage: {
    padding: 10
  },
  leftContainer: {
    flexDirection: 'row'
  },
  rightContent: {
    padding: 10
  },
  rightContentText: {
    fontSize: 18,
    marginBottom: 5,
    lineHeight: 30
  },
  detailContent: {
    padding: 10
  }
});

export {MovieDetailStyle as default}