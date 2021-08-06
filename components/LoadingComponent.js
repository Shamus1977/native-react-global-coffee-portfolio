import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {

    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='green' />
            <Text style={styles.loadingText}>All's Good... Just... Loading . . .</Text>
        </View>
    );

}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: 'green',
            fontSize: 24,
            fontWeight: 'bold'
        }
    }
);

export default Loading