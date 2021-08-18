import React, { Component } from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Intro from './IntroComponent';


const mapStateToProps = state => {
    return {
        charities: state.charities
    };
}

const Mission = () => {
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
        
        if(this.props.charities.isLoading){
            return (
                <ScrollView>
                <Mission />
                <Card
                    title='Featured Charities'
                >
                    <Loading />
                </Card>
            </ScrollView>
            )
        }

        if(this.props.charities.errMess){
            return (
                <ScrollView>
                <Mission />
                <Card
                    title='Featured Charities'
                >
                
                <Text>Oh no...{this.props.charities.errMess}</Text>
                </Card>
            </ScrollView>
            )
        }

        return (
            <ScrollView >
                <View style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                    <Intro text='About this app and the developer.' />
                </View>
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