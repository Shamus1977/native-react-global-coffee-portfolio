import React, { Component }  from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';




const mapStateToProps = state => {
    return {
        charities: state.charities
    }
}



function RenderCharityDetail({charity}) {
    if (charity) {
        return (
            <ScrollView style={{backgroundColor:'#239945'}}>
                <Card 
                    featuredTitle={charity.name}
                    featuredTitleStyle={{fontSize: 40, textAlign: 'center'}}
                    image={require('../assets/images/lady-picks-coffee.jpg')}
                >
                    <Text style={{margin: 10, fontSize: 28, textAlign:'center'}}>
                        {charity.description}
                    </Text>
                    <Text style={{margin: 20, fontSize: 20, textAlign:'center'}} >
                        {charity.content}
                    </Text>
                    <Text style={{margin: 20, fontSize: 20, textAlign:'center'}} >
                        {charity.details}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
    return <View />;
}



class CharityDetail extends Component  {


    static navigationOptions = {
        title: 'Region Charity'
    }

    render(){
        const targetId = this.props.navigation.getParam('targetId');
        const charity = this.props.charities.charities.filter(charity => charity.id === targetId)[0];
        return (
            <ScrollView>
                <RenderCharityDetail 
                    charity={charity}
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

export default connect(mapStateToProps)(CharityDetail);