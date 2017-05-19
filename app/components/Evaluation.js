import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    Navigator,
    ScrollView,
    BackAndroid,
    Platform
} from 'react-native';

import styles from '../styles/Main';
import MovieDetailStyle from '../styles/MovieDetailStyle';
import LoadingView from '../custom_view/LoadingView';

import BaseComponet from './BaseComponent';
import EvaluationView from './EvaluationView';

class Evaluation extends BaseComponet {

    constructor(props) {
        super(props);

        this.state = {
            movieDetail: '我是一段文字'
        }
    }

    render() {
        return (<EvaluationView
            movieDetail={this.state.movieDetail}
            navigator={this.props.navigator}/>);
    }

    /**
     * 详情页设计
     */
    renderDetail() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={MovieDetailStyle.title}>
                        <Text style={MovieDetailStyle.titleText}>悲伤地开始</Text>
                        <Text style={MovieDetailStyle.titleBtn} onPress={() => {}}>评价</Text>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export {Evaluation as default}
