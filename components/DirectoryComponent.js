import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <View style={styles.backGroundView}>
                <View style={styles.outerView}>
                    <View style={styles.innerView}>
                        <ListItem
                            titleStyle={styles.listItemTitle}
                            title={item.name + ':'}
                            subtitleStyle={styles.listItemSubtitle}
                            subtitle={item.description}
                            onPress={() => props.onPress(item.id)}
                            containerStyle={styles.containerStyle}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={props.regions}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles= StyleSheet.create({
    backGroundView:{
        backgroundColor:'#239945'
        , flex:1
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
        borderColor:'black',
        overflow:'hidden',
        borderWidth:1, 
        borderRadius:25,
    },
    listItemTitle:{
        fontSize:24,
    },
    containerStyle:{
        padding:20,
        backgroundColor: '#c8cbae',
    },
    listItemSubtitle:{
        fontSize:20
    }
})

export default Directory;