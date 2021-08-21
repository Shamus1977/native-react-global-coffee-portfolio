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
            <Text style={{margin: 10, fontSize:22, textAlign: 'center'}} >The mission of this sight is to help impoverished coffee farming regions and communities.
                                            The site is the profile project of Shay Johnson, for the NuCamp Bootcamp Front End Course. 
                                            Thanks for the Look!.</Text>
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
                    titleStyle={{fontSize:22}}
                    subtitle={item.description}
                    subtitleStyle={{fontSize:20}}
                    
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