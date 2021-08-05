import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Constants } from 'expo-constants';
import HistoryGeographyDirectory from './HistoryGeographyDirectoryComponent';
import HistoryDirectory from './HistoryDirectoryComponent';
import GeographyDirectory from './GeographyDirectoryComponent';

const HistoryDirectoryNavigator = createStackNavigator(
    {
        HistoryGeographyDirectory: {screen: HistoryGeographyDirectory},
        HistoryDirectory: {screen: HistoryDirectory},
        GeographyDirectory: {screen: GeographyDirectory},
        
    },
    {
        initialRouteName: 'HistoryGeographyDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#c8cbae'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);

const AppNavigator = createAppContainer(HistoryDirectoryNavigator);


class Main extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    /********************* PUT Platform FUNCTION BACK IN!!! */
                }}
            >
                <AppNavigator />
            </View>
        )
    }
}

export default Main;