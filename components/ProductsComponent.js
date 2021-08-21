
import React, { Component } from 'react';
import {ScrollView, Text, FlatList, View} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { postToCart } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
    }
}


const mapDispatchToProps = {
    postToCart: (id, productNumber, price, name, donation, weight) => (postToCart(id, productNumber, price, name, donation, weight)),
}


class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartItems: this.props.cartItems, 
        }
    }
    
        addItem(item) {
            this.props.postToCart(item.id, item.productNumber, item.price, item.name, item.donation, item.weight);
            //alert(JSON.stringify(this.props.cartItems));
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
                        <View style={{marginHorizontal:20,marginTop:8, flex:2}}>
                            <Button
                                title='Details'
                                onPress={() => this.props.navigate( 'CoffeeDetail', { targetId: item.id })}
                            />
                        </View>
                        <View style={{marginHorizontal:20,marginTop:8, marginBottom:15, flex:2}}>
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
