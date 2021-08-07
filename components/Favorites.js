import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import  Loading  from './LoadingComponent';

const mapStateToProps = state => {
    return {
        regions: state.regionsHistory,
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
                    onPress={ () => navigate('RegionDetail', {regionId: item.id})}
                />
            );
        };

        if(this.props.regions.isLoading){
            return <Loading />
        }
        if (this.props.regions.errMess) {
            return (
                <View>
                    <Text>{this.props.regions.errMess}</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={this.props.regions.regionsHistory.filter(
                    region => this.props.favorites.includes(region.id)
                )}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Favorites);