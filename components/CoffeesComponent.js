import React, { Component } from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import { Card, ListItem , Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Products from './ProductsComponent';
import { COFFEES } from '../shared/coffees';

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
        return (
            <ScrollView>
                <Products products={this.state.coffees}/>
                <Button
                    title='Cart'
                    titleStyle={{marginLeft:5, color: 'black'}}
                    icon={<Icon
                        name='shopping-cart'
                        type='font-awesome'
                        size={30}
                    />}
                    onPress={ () => this.props.navigation.navigate('ShoppingCart')}
                />
            </ScrollView>
        )
    }
}

export default Coffees;
