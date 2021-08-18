import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import Intro from './IntroComponent';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const { navigate} = this.props.navigation;
        return (
            <ScrollView style={{backgroundColor: 'rgba(0,0,0,.8)'}}>
                <Intro text='A pound of Coffee, a ton of humanity.' />
                <Pressable
                    onPress={() => navigate('Coffees')}
                >
                    <View style={[styles.outerView,{paddingBottom:.5}]}>
                        <View style={styles.innerViewLarge}>
                            <Text style={styles.largeText}>Coffee</Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => navigate('CharityTourDirectory')}
                >
                    <View style={[styles.outerView,{paddingBottom:.5}]}>
                        <View style={styles.innerView}>
                            <Text style={styles.region}>Regions:</Text>
                            <Text style={[styles.subInfoTop,{paddingStart:20}]}>Tours &</Text>
                            <Text style={[styles.subInfoBottom, {paddingStart:15}]}>Charities</Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => navigate('HistoryGeographyDirectory')}
                >
                    <View style={styles.outerView}>
                        <View style={styles.innerView}>
                            <Text style={styles.region}>Regions:</Text>
                            <Text style={styles.subInfoTop}>History &</Text>
                            <Text style={styles.subInfoBottom}>Geography</Text>
                        </View>
                    </View>
                </Pressable>
            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    backGroundView:{
        backgroundColor:'rgba(0,0,0,.8)', 
        flex:1
    },
    outerView:{
        marginVertical:20, 
        marginHorizontal:25, 
        borderRadius:25, 
        borderColor: '#c8cbae', 
        borderWidth: 2, 
        backgroundColor: '#c8cbae',
    },
    innerView:{
        height: 115,
        borderColor:'black',
        overflow:'hidden',
        borderWidth:1, 
        borderRadius:25,
        justifyContent:'center'
    },
    innerViewLarge:{
        height: 115,
        borderColor:'black',
        overflow:'hidden',
        borderWidth:1, 
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    region:{
        fontSize:26,
        marginLeft: '10%'
    },
    subInfoTop:{
        fontSize:22,
        marginLeft: '26%'
    },
    subInfoBottom:{
        fontSize:22,
        marginLeft: '40%'
    },
    largeText:{
        fontSize:40,
    },
    containerStyle:{
        padding:20,
        backgroundColor: '#c8cbae'
    },
    buttonsBoxView:{
        marginHorizontal:10, 
        flex:1,flexDirection:'row', 
        marginTop:-20, 
        justifyContent:'space-around', 
        alignItems: 'center', 
        paddingBottom:20
    },
    pressableStyle:{
        width:135,
        backgroundColor:'#fff', 
        paddingVertical:5, 
        paddingHorizontal:10, 
        borderWidth:0.5, 
        borderColor:'#fff', 
        borderRadius:10, 
        justifyContent:'center', 
        alignItems:'center'
    }
})

export default Home;