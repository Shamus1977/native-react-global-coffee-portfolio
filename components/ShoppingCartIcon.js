import React, { Component } from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}


const ShoppingCartIcon = (props) => {

    const numberOfItems = props.cartItems.itemCount;/* props.cartItems.cartItems.map( item => {
        const itemCount = 0;
        itemCount = itemCount + item.count;
        return itemCount;
    })*/

    return (
        <View style={{padding: 5}}>
            <View
                style={styles.cart}
            >
                <Text style={{fontSize:18, padding: 5}}>{numberOfItems}</Text>
            </View>
            <Icon
                name='shopping-cart'
                type='font-awesome'
                size={30}
                style={{marginRight:5}}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        cart:{
            position: 'absolute',
            borderRadius: 15,
            backgroundColor: 'rgba(0,200,100,.5)',
            right: 34,
            bottom: 2,
            marginBottom:5,
            width:50,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
)

export default connect(mapStateToProps)(ShoppingCartIcon);