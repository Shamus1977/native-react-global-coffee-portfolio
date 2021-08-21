import React, { Component } from 'react';
import { View } from 'react-native';
import {ScrollView, Text, FlatList} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteFromCart } from '../redux/ActionCreators';
import Loading from './LoadingComponent';


const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    };
}

const mapDispatchToProps = {
    deleteFromCart: (item) => (deleteFromCart(item)),
}

const Mission = () => {
    return (
        <Card>
            <Text style={{margin: 10, fontSize:20, textAlign:'center'}} >A Portion Of Every Purchase Goes To A Charity In The Product's Region Of Cultivation .</Text>
            <Text style={{ textAlign:'center', fontSize:55}}>Thank You!</Text>
        </Card>
    )
}

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartItems: this.props.cartItems,
            item:[],
        }
    }

    static navigationOptions = {
        title:'Shopping Cart'
    }


    itemCounter = (productNumber) => {
        const product =  this.props.cartItems.cartItems.filter( item => item.productNumber === productNumber)[0];
        const productCount =  product.count;
        return productCount;
    }

    removeItem(item){
        alert(JSON.stringify(item));
        this.props.deleteFromCart(item);
    }

    

    render () {

    const totalPrice = this.props.cartItems.totalCost;
    const roundedPrice = Math.round(totalPrice * 100) / 100;
    const totalDonation = this.props.cartItems.totalDonation;
    const   renderItem = ({item}) =>{
        const count = this.itemCounter(item.productNumber);
            return (
                <View style={{borderBottomWidth:1}}>
                    <ListItem 
                        title={item.name}
                        subtitle={`Your Donation: ${item.donation}`}
                        rightTitle={`Cost: ${item.price}`}
                        rightSubtitle={`Weight: ${item.weight} lbs`}
                    />
                    <Text>{`Count: ${count}`}</Text>
                    <View style={{margin:20, flex:2}}>
                        <Button 
                            title='Remove Item'
                            onPress={ () => this.removeItem(item)}
                        />
                    </View>
                </View>
            )
        }
        if(this.props.cartItems.isLoading){
            return (
                <ScrollView>
                <Mission />
                <Card
                    title='Shopping Cart'
                >
                    <Loading />
                </Card>
            </ScrollView>
            )
        }

        if(this.props.cartItems.errMess){
            return (
                <ScrollView>
                <Mission />
                <Card
                    title='Shopping Cart'
                >
                <Text>Oh no...{this.props.cartItems.errMess}</Text>
                </Card>
            </ScrollView>
            )
        }

        return (
            <ScrollView>
                <Mission />
                <Text style={{alignSelf:'center', fontSize:22, margin:5}}>{`Total Price: $${roundedPrice}`}</Text>
                <Text style={{alignSelf:'center', fontSize:22, margin:5}}>{`Total Donation: $${totalDonation}`}</Text>
                <Card
                    title='Shopping cart'
                >
                    <FlatList
                        data={this.props.cartItems.cartItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);