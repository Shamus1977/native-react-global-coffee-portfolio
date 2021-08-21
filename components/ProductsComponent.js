
import React, { Component } from 'react';
import {ScrollView, Text, FlatList, View} from 'react-native';
import { Card, ListItem, Button, Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { postToCart } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
    }
}


const mapDispatchToProps = {
    postToCart: (productNumber, price, itemCount, name, donation, weight) => (postToCart(productNumber, price, itemCount, name, donation, weight)),
}

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartItems: this.props.cartItems,
            itemCount: 0, 
        }
    }

    addItem(item) {
        this.props.postToCart(item.productNumber, item.price, 3, item.name, item.donation, item.weight);
    }

    render () {
        const   renderProducts = ({item}) =>{
            const brand = 'Name: ' + item.name;
            const description = 'Description: ' + item.description;
            const donation = 'Amount Given to Charity: $' + item.donation;
            const price = 'Cost: $' + item.price;
            const weight = 'Weight: ' + item.weight + ' lbs';
            
            return (
                <View style={{borderBottomWidth:1}}>
                    <ListItem
                        title={item.name}
                        titleStyle={{fontSize:28}}
                        subtitle={item.region}
                        subtitleStyle={{fontSize: 20}}
                        bottomDivider
                    />
                    <View style={{margin:5}}>
                        <Card 
                        image={require('../assets/images/coffee-beans-on-board.jpg')}
                        >
                            <Text style={{margin:5, fontSize: 18}}>
                                {brand}
                            </Text>
                            <Text style={{margin:5, fontSize: 18}}>
                                {description}
                            </Text>
                            <Text style={{margin:5, fontSize: 18}} >
                                {donation}
                            </Text>
                            <Text style={{margin:5, fontSize: 18}} >
                                {weight}
                            </Text>
                            <Text style={{margin:5, fontSize: 18}} >
                                {price}
                            </Text>
                        </Card>
                        <View style={{margin:20, flex:2}}>
                            <Button
                                title='Details'
                                onPress={() => this.props.navigate( 'CoffeeDetail', { targetId: item.id })}
                            />
                        </View>
                        <View style={{margin:20, flex:2}}>
                            <Button
                                title='Add To Cart'
                                onPress={ () => {
                                    this.addItem(item);
                                }}
                            />
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <ScrollView>
                <Card
                    title='Featured Coffees'
                >
                    <FlatList
                        data={this.props.products}
                        renderItem={renderProducts}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Products);
