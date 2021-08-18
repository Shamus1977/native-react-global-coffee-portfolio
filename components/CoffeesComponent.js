import React, { Component } from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import { Card, ListItem , Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Products from './ProductsComponent';
import Intro from './IntroComponent';
import { COFFEES } from '../shared/coffees';
import CartButton from './CartButtonComponent';

class Coffees extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffees: COFFEES,
        }
    }

    static navigationOptions = {
        title:'Coffees'
    }

    render(){
        const { navigate} = this.props.navigation;
        return (
            <View>
                <CartButton />
                <ScrollView style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                    <Intro text="The 'Amount given to charity', goes to a charity in the products region of orgin!" />
                    <Products products={this.state.coffees}/>
                </ScrollView>
            </View>
        )
    }
}

export default Coffees;
