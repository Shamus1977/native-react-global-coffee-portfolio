import React, { Component }  from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';




const mapStateToProps = state => {
    return {
        regions: state.regionsHistory
    }
}



function RenderHistoryDetail({region}) {
    if (region) {
        return (
            <ScrollView style={{backgroundColor:'#239945'}}>
                <Card 
                    featuredTitle={region.name}
                    featuredTitleStyle={{fontSize: 55}}
                    image={require('../assets/images/coffee-beans-on-board.jpg')}
                >
                    <Text style={{margin: 10, fontSize: 28, textAlign:'center'}}>
                        {region.description}
                    </Text>
                    <Text style={{margin: 20, fontSize: 20, textAlign:'center'}} >
                        {region.content}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
    return <View />;
}



class HistoryDetail extends Component  {


    static navigationOptions = {
        title: 'Region History'
    }

    render(){
        const regionId = this.props.navigation.getParam('regionId');
        const region = this.props.regions.regionsHistory.filter(region => region.id === regionId)[0];
        return (
            <ScrollView>
                <RenderHistoryDetail 
                    region={region}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        margin:20
    }
})

export default connect(mapStateToProps)(HistoryDetail);