import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Constants } from 'expo-constants';
import HistoryGeographyDirectory from './HistoryGeographyDirectoryComponent';
import HistoryDirectoryComponent from './HistoryDirectoryComponent';
import CharityTourDirectory from './CharityTourDirectoryComponent';

const HistoryDirectoryNavigator = createStackNavigator(
    {
        HistoryGeographyDirectory: {screen: HistoryGeographyDirectory},
        HistoryDirectoryComponent: {screen: HistoryDirectoryComponent},
        
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
                    
                }}
            >
                <AppNavigator />
            </View>
        )
    }
}

export default Main;