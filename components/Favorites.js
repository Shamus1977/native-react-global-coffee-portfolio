import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import  Loading  from './LoadingComponent';
import Intro from './IntroComponent';

const mapStateToProps = state => {
    return {
        coffees: state.coffees,
        favorites: state.favorites
    }
}

class Favorites extends Component {

    static navigationOptions = {
        title: 'Your Favorites!'
    }

    render(){
        const { navigate } = this.props.navigation;
        const renderFavoriteItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('../assets/images/coffee-beans-on-board.jpg') }}
                    onPress={ () => navigate('CoffeeDetail', {targetId: item.id})}
                />
            );
        };

        if(this.props.coffees.isLoading){
            return <Loading />
        }
        if (this.props.coffees.errMess) {
            return (
                <View>
                    <Text>{this.props.coffees.errMess}</Text>
                </View>
            );
        }

        return (
            <View>
                <View style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                    <Intro text='Your selected favorites:' />
                </View>
                <FlatList
                    data={this.props.coffees.coffees.filter(
                        coffee => this.props.favorites.includes(coffee.id)
                    )}
                    renderItem={renderFavoriteItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps)(Favorites);