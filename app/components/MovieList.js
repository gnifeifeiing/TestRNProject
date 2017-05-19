/*
 * @Describe: 功能描述
 * @Author: lf
 * @Date: 2017-04-26 09:15:57
 * @Last Modified by: lf
 * @Last Modified time: 2017-04-28 10:32:32
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
  RefreshControl
} from 'react-native';

import styles from '../styles/Main';
import LoadingView from '../custom_view/LoadingView';
import LoadMoreFooter from '../custom_view/LoadMoreFooter';
import MovieDetail from './MovieDetail';
import NativeModules from '../utils/SendBroadcastModule';
import TitleBarView from '../custom_view/TitleBarView';
import Consts from '../consts/ConstServer';

/**
 * 电影列表
 */
class MovieListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
      totalCount: 0,
      isRefreshing: false
    };
  }

  //rn生命周期，初始化时候执行
  componentDidMount() {
    this.fetchData();
  }

  /**
   * 请求豆瓣接口
   */
  fetchData() {
    fetch(Consts.SERVER_URL).then(response => {
      return response.json()
    }).then(responseData => {
      this.setState({
        dataSource: this
          .state
          .dataSource
          .cloneWithRows(responseData.subjects),
        loaded: true,
        totalCount: responseData.subjects.length,
        isRefreshing: false
      });
    }).done;
  }

  /**
   * 跳转到详情页
   * @param {*} movie
   */
  showMovieDetails(movie) {
    this
      .props
      .navigator
      .push({title: movie.title, component: MovieDetail, passProps: {
          movie
        }});
  }

  /**
   * listview item样式
   * @param {*} movie
   */
  renderMovie(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(23, 42, 21, 0.5)"
        onPress={() => {
        this.showMovieDetails(movie);
      }}>

        <View style={styles.item}>
          <Image
            source={{
            uri: movie.images.large
          }}
            style={styles.image}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}{'   (' + movie.year + ')'}</Text>
            <Text style={styles.enTitle}>{movie.original_title}</Text>
            <Text style={styles.rating}>{movie.rating.average}</Text>
          </View>
        </View>

      </TouchableHighlight>
    );
  }

  _onRefresh() {
    this.setState({isRefreshing: true});
    this.fetchData();
  }

  _toEnd() {
    ToastAndroid.show('到底部了', ToastAndroid.SHORT);
    const {reducer} = this.state;
    //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
    if (reducer.dataSource.length >= reducer.totalCount || reducer.isRefreshing) {
      return;
    };
    InteractionManager.runAfterInteractions(() => {
      ToastAndroid.show('到底部了', ToastAndroid.SHORT);
      // this._loadMoreData();
    });

  }

  _renderFooter() {
    const {reducer} = this.state;
    //通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
    if (reducer.dataSource.length < 1 || reducer.isRefreshing) {
      return null
    };
    if (reducer.dataSource.length < reducer.totalCount) {
      //还有更多，默认显示‘正在加载更多...’
      return <LoadMoreFooter/>
    } else {
      // 加载全部
      return <LoadMoreFooter isLoadAll={true}/>
    }
  }

  render() {
    if (!this.state.loaded) {
      //加载中。。。
      return (<LoadingView/>);
    } else {
      return (
        <View style={styles.container}>
          <TitleBarView navigator={this.props.navigator} text="电影推荐"/>
          <Text
            style={styles.sendBroadcastBtn}
            onPress={() => {
            NativeModules
              .SendBroadcast
              .sendBroadcast();
          }}>发送广播</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this
            .renderMovie
            .bind(this)}
            refreshControl={< RefreshControl refreshing = {
            this.state.isRefreshing
          }
          onEndReached = {
            this
              ._toEnd
              .bind(this)
          }
          onEndReachedThreshold = {
            10
          }
          renderFooter = {
            this
              ._renderFooter
              .bind(this)
          }
          enableEmptySections = {
            true
          }
          onRefresh = {
            this
              ._onRefresh
              .bind(this)
          }
          tintColor = "red" colors = {
            ['#ff0000', '#00ff00', '#0000ff']
          }
          progressBackgroundColor = "gray" />}/>
        </View>
      );
    }
  }
}

export {MovieListComponent as default}