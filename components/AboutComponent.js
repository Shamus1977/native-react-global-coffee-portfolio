import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { CHARITIES } from '../shared/charities';



const Mission = (props) => {
    return (
        <Card>
            <Text style={{margin: 10}} >Here we strive to do this really, really, well.</Text>
        </Card>
    )
}

class About extends Component {
    constructor(props){
        super(props);
        this.state ={
            charities: CHARITIES
        }
    }

    static navigationOptions = {
        title:'About this App'
    }

    render () {
    const   renderCharity = ({item}) =>{

            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('../assets/images/colombia.jpg')}}
                />
            )
        }

        return (
            <ScrollView>
                <Mission />
                <Card
                    title='Featured Charities'
                >
                    <FlatList
                        data={this.state.charities}
                        renderItem={renderCharity}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default About;