import React, { Component }  from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';




const mapStateToProps = state => {
    return {
        tours: state.tours
    }
}



function RenderTourDetail({tour}) {
    if (tour) {
        return (
            <ScrollView style={{backgroundColor:'#239945'}}>
                <Card 
                    featuredTitle={tour.name}
                    featuredTitleStyle={{fontSize: 40, textAlign: 'center'}}
                    image={require('../assets/images/lady-picks-coffee.jpg')}
                >
                    <Text style={{margin: 10, fontSize: 28, textAlign:'center'}}>
                        {tour.description}
                    </Text>
                    <Text style={{margin: 20, fontSize: 20, textAlign:'center'}} >
                        {tour.details}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
    return <View />;
}



class TourDetail extends Component  {


    static navigationOptions = {
        title: 'Regional Tour'
    }

    render(){
        const targetId = this.props.navigation.getParam('targetId');
        const tour = this.props.tours.tours.filter(tour => tour.id === targetId)[0];
        return (
            <ScrollView>
                <RenderTourDetail 
                    tour={tour}
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

export default connect(mapStateToProps)(TourDetail);