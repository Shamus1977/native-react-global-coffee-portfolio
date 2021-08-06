import React, { Component } from 'react';
import {ScrollView, Text, FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        charities: state.charities
    };
}




const Mission = (props) => {
    return (
        <Card>
            <Text style={{margin: 10}} >Here we strive to do this really, really, well.</Text>
        </Card>
    )
}

class About extends Component {

    static navigationOptions = {
        title:'About this App'
    }

    render () {
    const   renderCharity = ({item}) =>{

            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    
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
                        data={this.props.charities.charities}
                        renderItem={renderCharity}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(About);