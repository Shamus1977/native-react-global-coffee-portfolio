import React, {Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { createBottomTabNavigator } from 'react-navigation-tabs';


class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
            remember: false,
        };
    }

    static navigationOptions = {
        title:'Register'
    }

    handleRegister(){
        console.log(JSON.stringify(this.state));
        if(this.state.remember){
            SecureStore.setItemAsync('userinfo', JSON.stringify(
                {username: this.state.username, password: this.state.password}))
                .catch(error => console.log('Could not save user info ', error));
        }else{
            SecureStore.deleteItemAsync('userinfo')
                .catch(error => console.log('Could not delete user info', error));
        }
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Input 
                        placeholder='Username'
                        leftIcon={{type:'font-awesome', name:'user'}}
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input 
                        placeholder='Password'
                        leftIcon={{type:'font-awesome', name:'lock'}}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input 
                        placeholder='First Name'
                        leftIcon={{type:'font-awesome', name:'user'}}
                        onChangeText={firstName => this.setState({firstName})}
                        value={this.state.firstName}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input 
                        placeholder='Last Name'
                        leftIcon={{type:'font-awesome', name:'user'}}
                        onChangeText={lastName => this.setState({lastName})}
                        value={this.state.lastName}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input 
                        placeholder='Email'
                        leftIcon={{type:'font-awesome', name:'envelope'}}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <CheckBox 
                        title='Remember Me?'
                        checked={this.state.remember}
                        onPress={ () => this.setState({remember: !this.state.remember})}
                        center
                        containerStyle={styles.formCheckBox}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleRegister()}
                            title='Register'
                            icon={
                                <Icon 
                                    name='user-plus'
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{marginRight:10}}
                                />
                            }
                            buttonStyle={{backgroundColor:'blue'}}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 5
    },
    formCheckbox: {
        margin: 5,
        backgroundColor: null
    },
    formButton: {
        margin: 5,
        marginRight: 40,
        marginLeft: 40
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    }
});

export default Register;