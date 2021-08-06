import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import  SafeAreaView  from 'react-native-safe-area-view';
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
        HistoryGeographyDirectory: {
            screen: HistoryGeographyDirectory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        HistoryDirectory: {screen: HistoryDirectory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        RegionDetail: {screen: RegionDetail,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        GeographyDirectory: {screen: GeographyDirectory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        
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
        Home: { screen: Home,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        HistoryGeographyDirectory: {screen: HistoryGeographyDirectory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }

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
        About: { screen: About,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }

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
        Contact: { screen: Contact,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }

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

const CustomDrawerContainerComponent = (props) => {

    return (
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{top: 'always', horizontal: 'never'}}
            >
                <View style={styles.drawerHeader}>
                    <View style={{flex:1}}>
                        <Text style={styles.drawerHeaderText}>Global Coffee Portal</Text>
                    </View>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    )
}



const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        History: { screen: HistoryDirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='book'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Geography: { screen: HistoryDirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='globe'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {screen: AboutNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='phone'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            },
        }
    },
    {
        drawerBackgroundColor: '#c8cbae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: 'rgba(0,0,0,.8)',
            labelStyle:{fontSize:24}
        },
        contentComponent: CustomDrawerContainerComponent
    },
);


const AppNavigator = createAppContainer(MainNavigator);


class Main extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
                }}
            >
                <Text>The Global Coffee Portal</Text>
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        marginLeft: 20,
        color: '#fff',
        fontSize: 30
    },
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: 'green',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center'
    },
})


export default Main;