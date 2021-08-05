import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import  Constants  from 'expo-constants';
import About from './AboutComponent';
import Contact from './ContactComponent';
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
        Home: { screen: Home },
        HistoryGeographyDirectory: {screen: HistoryGeographyDirectory}

    },
    {
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

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }

    },
    {
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
)

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }

    },
    {
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
)



const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        History: { screen: HistoryDirectoryNavigator },
        Geography: { screen: HistoryDirectoryNavigator },
        About: {screen: AboutNavigator},
        Contact: {screen: Contact}
    },
    {
        drawerBackgroundColor: '#c8cbae'
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