import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import  Constants  from 'expo-constants';
import Home from './HomeComponent';
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

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        History: { screen: HistoryDirectoryNavigator },
        Geography: { screen: HistoryDirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);



const AppNavigator = createAppContainer(MainNavigator);


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