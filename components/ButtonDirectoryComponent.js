import React from 'react';
import { FlatList, View, Pressable, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

function ButtonDirectory(props) {

    const addButtons = (array, btnRight, btnLeft,pressLeft,pressRight) => {
        const upDatedObject = array.map( object => ({...object, 
                                                    buttonRight:btnRight, 
                                                    buttonLeft:btnLeft, 
                                                    pressButtonLeft:pressLeft,
                                                    pressButtonRight: pressRight
                                                    }));
        return upDatedObject;
    }

    const updatedArray = addButtons(props.regions, 
                                    props.buttonRight, 
                                    props.buttonLeft, 
                                    props.pressButtonLeft,
                                    props.pressButtonRight
                                    );
    
    const navigate = props.navigate;
    
    const renderDirectoryItem = ({item}) => {
        const directLeft = item.region + item.pressButtonLeft;
        const directRight = item.region + item.pressButtonRight;
        return (
            <View >
                <View style={styles.outerView}>
                    <View style={styles.innerView}>
                        <ListItem
                            titleStyle={styles.listItemTitle}
                            title={item.name +':'}
                            containerStyle={styles.containerStyle}
                        />
                        <View style={styles.buttonsBoxView}>
                            <Pressable
                                style={styles.pressableStyle}
                                onPress={() => navigate(directLeft)}
                            >
                                <Text style={{fontSize:20,fontFamily:'sans-serif', letterSpacing:1.8}}>{item.buttonLeft}</Text>
                            </Pressable>
                            <Pressable
                                style={styles.pressableStyle}
                                onPress={() => navigate(directRight)}
                            >
                                <Text style={{fontSize:20, fontFamily:'sans-serif', letterSpacing:1.8,}}>{item.buttonRight}</Text>
                            </Pressable>
                        </View>
                    </View>
                    </View>
            </View>
        );
    };

    return (
        <FlatList
            data={updatedArray}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles= StyleSheet.create({
    backGroundView:{
        backgroundColor:'rgba(0,0,0,.8)'
        , flex:1
    },
    outerView:{
        marginVertical:20, 
        marginHorizontal:25, 
        borderRadius:25, 
        borderColor: '#d4d6bf', 
        borderWidth: 2, 
        backgroundColor: '#d4d6bf',
    },
    innerView:{
        height: 115,
        borderColor:'black',
        overflow:'hidden',
        borderWidth:1, 
        borderRadius:25,
    },
    listItemTitle:{
        fontSize:24,
        marginBottom:1, 
        marginTop:-14
    },
    containerStyle:{
        padding:20,
        backgroundColor: '#d4d6bf'
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

export default ButtonDirectory;