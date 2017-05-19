/*
 * @Describe: 功能描述
 * @Author: lf
 * @Date: 2017-04-26 09:45:51
 * @Last Modified by: lf
 * @Last Modified time: 2017-04-26 09:46:30
 */
import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    Navigator,
    ScrollView,
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import styles from '../styles/Main';
import MovieDetailStyle from '../styles/MovieDetailStyle';
import LoadingView from '../custom_view/LoadingView';

import BaseComponet from './BaseComponent';
import Evaluation from './Evaluation';
import TitleBarView from '../custom_view/TitleBarView';

export default class EvaluationView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieDetail: this.props.movieDetail
        }
    }

    render() {
        return (this.renderDetail(this.state.movieDetail));
    }

    /**
     * 详情页设计
     */
    renderDetail(movieDetail) {
        return (
            <ScrollView style={styles.container}>
                <TitleBarView navigator={this.props.navigator} text="哈哈哈"/>
                <View style={styles.container}>
                    <View style={MovieDetailStyle.title}>
                        <Text
                            style={MovieDetailStyle.titleText}
                            onPress={() => {
                            this.setState({movieDetail: '我是一段字符串'});
                            ToastAndroid.show('我是一段字符串', ToastAndroid.SHORT);
                        }}>{movieDetail}</Text>
                    </View>

                </View>
            </ScrollView>
        );
    }

}