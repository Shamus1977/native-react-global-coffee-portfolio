import React, { Component } from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Products from './ProductsComponent';
import Intro from './IntroComponent';
import { COFFEES } from '../shared/coffees';

const mapStateToProps = state => {
    return {
        coffees: state.coffees
    };
}

class Coffees extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffees: this.props.coffees.coffees,
        }
    }

    static navigationOptions = {
        title:'Coffees'
    }

    render(){
        const { navigate} = this.props.navigation;
        return (
            <View>
                <Button
                title='Go To Cart'
                titleStyle={{marginLeft:5, color: 'black'}}
                icon={<Icon
                    name='shopping-cart'
                    type='font-awesome'
                    size={30}
                />}
                onPress={ () => navigate('ShoppingCart')}
            />
                <ScrollView style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                    <Intro text="The 'Amount given to charity', goes to a charity in the products region of orgin!" />
                    <View style={{marginBottom:25}}>
                    <Products products={this.state.coffees}
                                navigate={navigate}
                    />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default connect(mapStateToProps)(Coffees);
