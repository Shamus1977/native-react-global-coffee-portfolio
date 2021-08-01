import React from 'react';
import { FlatList, View, Pressable, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <View style={{backgroundColor:'#239945', flex:1}}>
                <View style={{marginVertical:20, marginHorizontal:25, borderRadius:15, border: 'solid', borderColor: '#c8cbae', borderWidth: 2, backgroundColor: '#c8cbae',}}>
                    <View style={{ height: 115,border:'solid', borderColor:'black', borderWidth:2, overflow:'hidden', borderRadius:15,}}>
                        <ListItem
                            titleStyle={{fontSize:24, marginBottom:1, marginTop:-14}}
                            title={item.name +':'}
                            containerStyle={{padding:20, border: 'solid', borderColor:'black',backgroundColor: '#c8cbae', fontSize:24}}
                        />
                        <View style={{marginHorizontal:10, flex:1,flexDirection:'row', marginTop:-20, justifyContent:'space-around', alignItems: 'center', paddingBottom:20 }}>
                            <Pressable
                                style={{backgroundColor:'#fff', paddingVertical:5, paddingHorizontal:10, border:'solid', borderWidth:1, borderColor:'black', borderRadius:10,}}
                            >
                                <Text style={{fontSize:20,fontFamily:'sans-serif', letterSpacing:1.8}}>History</Text>
                            </Pressable>
                            <Pressable
                                style={{backgroundColor:'#fff', paddingVertical:5, paddingHorizontal:10, border:'solid', borderWidth:1, borderColor:'black', borderRadius:10,}}
                            >
                                <Text style={{fontSize:20, fontFamily:'sans-serif', letterSpacing:1.8,}}>Charity</Text>
                            </Pressable>
                        </View>
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

export default Directory;