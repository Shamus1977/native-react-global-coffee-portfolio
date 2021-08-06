import React, { Component }  from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import RenderComments from './RenderComments';
import { REGIONS_HISTORY } from '../shared/regionsHistory';
import { REGIONS_COMMENTS } from '../shared/regionsComments';


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
    constructor(props){
        super(props);
        this.state ={
            regions: REGIONS_HISTORY,
            comments: REGIONS_COMMENTS,
            favorite: false,
        }
    }

    static navigationOptions = {
        title: 'Region Information'
    }

    markFavorite(){
        this.setState({favorite:true})
    }

    render(){
        const regionId = this.props.navigation.getParam('regionId');
        const comments = this.state.comments.filter(comment => comment.regionId === regionId);
        const region = this.state.regions.filter(region => region.id === regionId)[0];
        return (
            <ScrollView>
                <RenderRegionDetail 
                    region={region}
                    favorite={this.state.favorite}
                    markFavorite={ () => this.markFavorite() }
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}

export default RegionDetail;
