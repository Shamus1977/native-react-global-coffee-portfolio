import React, { Component }  from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import RenderComments from './RenderComments';
import { REGIONS_HISTORY } from '../shared/regionsHistory';
import { REGION_COMMENTS } from '../shared/regionComments';


function RenderRegionDetail({region}) {
    if (region) {
        return (
            <Card 
                featuredTitle={region.name}
                image={require('../assets/images/coffee-beans-on-board.jpg')}
            >
                <Text style={{margin: 10}}>
                    {region.description}
                </Text>
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
            comments: REGION_COMMENTS
        }
    }

    static navigationOptions = {
        title: 'Region Information'
    }

    render(){
        const regionId = this.props.navigation.getParam('regionId');
        const comments = this.state.comments.filter(comment => comment.regionId === regionId);
        const region = this.state.regions.filter(region => region.id === regionId)[0];
        return (
            <ScrollView>
                <RenderRegionDetail region={region}  />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}

export default RegionDetail;
