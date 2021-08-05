import React  from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function RegionDetail(props) {

        return <RenderRegionDetail region={props.region}  />;
}

export default RegionDetail;
