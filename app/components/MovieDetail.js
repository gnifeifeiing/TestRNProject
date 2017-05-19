/*
 * @Describe: 功能描述
 * @Author: lf
 * @Date: 2017-04-28 10:44:28
 * @Last Modified by:   lf
 * @Last Modified time: 2017-04-28 10:44:28
 */

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
import MovieDetailView from './MovieDetailView';
import Consts from '../consts/ConstServer';

class MovieDetail extends BaseComponet {

    constructor(props) {
        super(props);

        this.state = {
            movieDetail: '',
            loaded: false
        }

        //movie详情接口
        const MOVIE_DETAIL_URL = Consts.MOVIE_DETAIL_URL + `${this.props.movie.id}`;
        this.fetchData(MOVIE_DETAIL_URL);
    }

    /**
     * 请求数据
     * @param {*} MOVIE_DETAIL_URL
     */
    fetchData(MOVIE_DETAIL_URL) {
        fetch(MOVIE_DETAIL_URL).then(response => {
            return response.json()
        }).then(responseData => {
            this.setState({movieDetail: responseData, loaded: true});
        }).done;
    }

    render() {
        if (!this.state.loaded) {
            return (<LoadingView/>);
        } else {
            return (<MovieDetailView
                movieDetail={this.state.movieDetail}
                navigator={this.props.navigator}/>);
        }
    }

}

export {MovieDetail as default}
