import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, Rating } from 'react-native-elements';


function RenderComments({comments}){

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Rating 
                    style={{alignItems: 'flex-start', paddinVertical: '5%'}}
                    startingValue={item.rating}
                    imageSize={10}
                    readonly
                />
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

export default RenderComments;