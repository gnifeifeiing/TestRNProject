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
import Evaluation from './Evaluation';
import TitleBarView from '../custom_view/TitleBarView';

export default class MovieDetailView extends Component {

    render() {
        return (this.renderDetail(this.props.movieDetail));
    }

    /**
     * 详情页设计
     */
    renderDetail(movieDetail) {
        return (
            <ScrollView style={styles.container}>
                <TitleBarView navigator={this.props.navigator} text="电影详情"/>
                <View style={styles.container}>
                    <View style={MovieDetailStyle.title}>
                        <Text style={MovieDetailStyle.titleText}>{movieDetail.title}</Text>
                        <Text
                            style={MovieDetailStyle.titleBtn}
                            onPress={() => {
                            this
                                .props
                                .navigator
                                .push({component: Evaluation});
                        }}>评价</Text>
                    </View>
                    <View style={MovieDetailStyle.leftContainer}>
                        <View style={MovieDetailStyle.leftImage}>
                            <Image
                                source={{
                                uri: movieDetail.images.large
                            }}
                                style={{
                                width: 140,
                                height: 220
                            }}/>
                        </View>
                        <View style={MovieDetailStyle.rightContent}>
                            <Text style={MovieDetailStyle.rightContentText}>{movieDetail.countries}</Text>
                            <Text style={MovieDetailStyle.rightContentText}>{movieDetail.genres}</Text>
                            <Text
                                style={[
                                MovieDetailStyle.rightContentText, {
                                    color: '#CD2626'
                                }
                            ]}>{movieDetail.rating.average}</Text>
                        </View>
                    </View>
                    <View style={MovieDetailStyle.detailContent}>
                        <Text style={MovieDetailStyle.rightContentText}>{movieDetail.summary}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }

}