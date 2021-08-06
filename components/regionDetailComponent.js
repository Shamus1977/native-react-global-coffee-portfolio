import React, { Component }  from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import RenderComments from './RenderComments';
import { postFavorite } from '../redux/ActionCreators';



const mapStateToProps = state => {
    return {
        regions: state.regionsHistory,
        comments: state.regionsComments,
        favorites: state.favorites
    }
}

const mapDispatchToProps =  {
    postFavorite: regionId => (postFavorite(regionId))
}


function RenderRegionDetail({region, favorite, markFavorite}) {
    if (region) {
        return (
            <Card 
                featuredTitle={region.name}
                image={require('../assets/images/coffee-beans-on-board.jpg')}
            >
                <Text style={{margin: 10}}>
                    {region.description}
                </Text>
                <Icon
                    name={favorite ? 'heart' : 'heart-o' }
                    type='font-awesome'
                    color='#f50'
                    onPress={() =>favorite ? 
                        console.log('Already set as a favorite') : markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

class RegionDetail extends Component  {


    static navigationOptions = {
        title: 'Region Information'
    }

    markFavorite(regionId){
        this.props.postFavorite(regionId)
    }

    render(){
        const regionId = this.props.navigation.getParam('regionId');
        const comments = this.props.comments.regionsComments.filter(comment => comment.regionId === regionId);
        const region = this.props.regions.regionsHistory.filter(region => region.id === regionId)[0];
        return (
            <ScrollView>
                <RenderRegionDetail 
                    region={region}
                    favorite={this.props.favorites.includes(regionId)}
                    markFavorite={ () => this.markFavorite(regionId) }
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionDetail);
