import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import  Constants  from 'expo-constants';
import HistoryGeographyDirectory from './HistoryGeographyDirectoryComponent';
import HistoryDirectory from './HistoryDirectoryComponent';
import RegionDetail from './regionDetailComponent';
import GeographyDirectory from './GeographyDirectoryComponent';

const HistoryDirectoryNavigator = createStackNavigator(
    {
        HistoryGeographyDirectory: {screen: HistoryGeographyDirectory},
        HistoryDirectory: {screen: HistoryDirectory},
        RegionDetail: {screen: RegionDetail},
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
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                <AppNavigator />
            </View>
        )
    }
}

export default Main;