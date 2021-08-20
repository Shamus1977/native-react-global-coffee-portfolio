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
            fetchTours, fetchRegions, fetchRegionsGeography, fetchCartItems } from '../redux/ActionCreators';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
import CharityTourDirectory from './CharityTourDirectoryComponent';
import ColombiaCharityDirectory from './ColombiaCharityDirectory';
import ColombiaTourDirectory from './ColombiaTourDirectory';
import CharityDetail from './CharityDetailComponent';
import TourDetail from './TourDetailComponent';
import Coffees from './CoffeesComponent';
import ShoppingCart from './ShoppingCartComponent';
import Payment from './PaymentComponent';
import ShoppingCartIcon from './ShoppingCartIcon';
import Login from './LoginComponent';
import  Register  from './RegisterComponent';




const mapDispatchToProps = {
    fetchRegions,
    fetchRegionsHistory,
    fetchRegionsGeography,
    fetchRegionsComments,
    fetchCharities,
    fetchTours,
    fetchCartItems,
}

/*
const BottomNavigator = createBottomTabNavigator(
    {
        Login: Login,
    },
    {
        tabBarOptions:{
            activeBackgroundColor: 'blue',
            inactiveBackgroundColor:'#fff',
            activeTintColor:'yellow',
            inactiveTintColor:'green',
            labelStyle:{fontSize:16}
        }
    }
);*/


const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='bars'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Register: {screen: Register}

    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
)

const CoffeesNavigator = createStackNavigator(
    {
        Coffees: {
            screen: Coffees,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='bars'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        ShoppingCart: {screen: ShoppingCart},
        Payment: {screen: Payment},
    },
    {
        initialRouteName: 'Coffees',
        defaultNavigationOptions: {
            headerRight: (<ShoppingCartIcon 
                        />),
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);



const HistoryDirectoryNavigator = createStackNavigator(
    {
        HistoryGeographyDirectory: {
            screen: HistoryGeographyDirectory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='bars'
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
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                color: '#000'
            }
        }
    }
);

const CharityDirectoryNavigator = createStackNavigator(
    {
        CharityTourDirectory: {
            screen: CharityTourDirectory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon 
                    name='bars'
                    type='font-awesome'
                    iconStyle={styles.iconStyle}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        ColombiaCharityDirectory: {screen: ColombiaCharityDirectory},
        CharityDetail: {screen: CharityDetail},
        ColombiaTourDirectory: {screen: ColombiaTourDirectory},
        TourDetail: { screen: TourDetail},
        
    },
    {
        initialRouteName: 'CharityTourDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
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
                    name='bars'
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
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
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
                    name='bars'
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
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
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
                    name='bars'
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
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
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
                    name='bars'
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
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
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
                    name='bars'
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
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
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
        Login: { screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
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
        Coffees: { screen: CoffeesNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='coffee'
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
        Charity: { screen: CharityDirectoryNavigator,
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
        Tours: { screen: CharityDirectoryNavigator,
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
        },
    },
    {
        initialRouteName:'Home',
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
        this.props.fetchCartItems();
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
                        <View style={{alignItems:'flex-start', width:'90%', marginBottom:-10}}>
                            <Text style={styles.mainHeaderSubText}>The</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={styles.mainHeaderLargeText}>G</Text>
                            <Text style={styles.mainHeaderSmallText}>LOBAL</Text>
                            <Text style={styles.mainHeaderLargeText}>C</Text>
                            <Text style={styles.mainHeaderSmallText}>OFFEE</Text>
                            <Text style={styles.mainHeaderLargeText}>P</Text>
                            <Text style={styles.mainHeaderSmallText}>ORTAL</Text>
                        </View>
                    </View>
                    <AppNavigator />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    iconStyle: {
        marginLeft: 20,
        color: 'black',
        fontSize: 30
    },
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: 'rgba(0,200,100,.5)',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    mainHeader: {
        backgroundColor: '#29a94e', /* rgba(0,200,100,.5) */ /* #239945 */
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
    },
    mainHeaderLargeText: {
        color: '#d4d6bf',  /* #bec8a6 */
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
    },
    mainHeaderSmallText: {
        color: '#d4d6bf',  /* #bec8a6 */
        fontSize: 26,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:9,
        marginRight:8,
    },
    mainHeaderSubText:{
        color: '#d4d6bf',  /* #bec8a6 */
        fontSize: 20,
        fontWeight: 'bold',
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center'
    },
})


export default connect(null,mapDispatchToProps)(Main);