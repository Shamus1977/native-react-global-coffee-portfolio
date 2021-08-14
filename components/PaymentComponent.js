import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

class Payment extends Component {
    render(){
        return (
            <View>
                <Text>Pay Here With Stripe!</Text>
            </View>
        )
    }
}

export default Payment;
