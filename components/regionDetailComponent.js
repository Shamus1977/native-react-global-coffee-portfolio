import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { REGIONS_HISTORY } from '../shared/regionsHistory';

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
            regions: REGIONS_HISTORY
        }
    }

    static navigationOptions = {
        title: 'Region Information'
    }

    render(){
        const regionId = this.props.navigation.getParam('regionId');
        const region = this.state.regions.filter(region => region.id === regionId)[0];
        return <RenderRegionDetail region={region}  />;
    }
}

export default RegionDetail;
