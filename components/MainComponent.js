import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import  SafeAreaView  from 'react-native-safe-area-view';
import  Constants  from 'expo-constants';
import { connect } from 'react-redux';
import { fetchRegionsHistory, fetchCharities, fetchRegionsComments, 
            fetchTours, fetchRegions, fetchRegionsGeography } from '../redux/ActionCreators';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import HistoryGeographyDirectory from './HistoryGeographyDirectoryComponent';
import HistoryDirectory from './HistoryDirectoryComponent';
import ColombiaHistoryDirectory from './ColombiaHistoryDirectory';
import ColombiaGeographyDirectory from './ColombiaGeographyDirectory';
import RegionDetail from './regionDetailComponent';
import HistoryDetail from './HistoryDetailComponent';
import GeographyDetail from './GeographyDetailComponent';
import GeographyDirectory from './GeographyDirectoryComponent';
import DateSearch from './DateSearchComponent';
import Favorites from './Favorites';

const mapDispatchToProps = {
    fetchRegions,
    fetchRegionsHistory,
    fetchRegionsGeography,
    fetchRegionsComments,
    fetchCharities,
    fetchTours
}


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
        ColombiaHistoryDirectory: {screen: ColombiaHistoryDirectory},
        HistoryDetail: {screen: HistoryDetail},
        ColombiaGeographyDirectory: {screen: ColombiaGeographyDirectory},
        GeographyDetail: { screen: GeographyDetail},
        
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

const DateSearchNavigator = createStackNavigator(
    {
        DateSearch: { screen: DateSearch,
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

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites,
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
        DateSearch: {screen: DateSearchNavigator,
            navigationOptions: {
                drawerLabel:'Search Tour dates',
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
        Favorites: {screen: FavoritesNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
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
            labelStyle:{
                fontSize:24, 
                fontWeight:'normal', 
                marginLeft:0}
        },
        contentComponent: CustomDrawerContainerComponent
    },
);


const AppNavigator = createAppContainer(MainNavigator);


class Main extends Component {

    componentDidMount(){
        this.props.fetchRegions();
        this.props.fetchRegionsHistory();
        this.props.fetchRegionsGeography();
        this.props.fetchRegionsComments();
        this.props.fetchCharities();
        this.props.fetchTours();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                    <View style={styles.mainHeader}>
                        <Text style={styles.mainHeaderText}>Global Coffee Portal</Text>
                    </View>
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
        backgroundColor: '#239945',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    mainHeader: {
        backgroundColor: '#239945',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height:75,
    },
    mainHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center',
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center'
    },
})


export default connect(null,mapDispatchToProps)(Main);