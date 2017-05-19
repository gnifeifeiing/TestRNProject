import React, {Component} from 'react';
import styles from '../styles/Main.js'
import {Text, View, ActivityIndicator} from 'react-native';

export default class LoadingView extends Component {

    constructor(props) {
        super(props);
        this.state = { // 初始设为显示加载动画
            animating: true
        };
    }

    render() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[
                    styles.centering, {
                        height: 80
                    }
                ]}
                    size="large"/>
                <Text style={styles.loadText}>加载中。。。</Text>
            </View>
        );
    }
}