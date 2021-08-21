import React, {Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            remember: false,
        };
    }

    static navigationOptions = {
        title: 'Login',
        tabBarIcon: ({tintColor}) => (
            <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={{color: tintColor}}
            />
        )
    }

    handleLogin(){
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

    componentDidMount(){
        SecureStore.getItemAsync('userinfo')
            .then(userdata => {
                const userinfo = JSON.parse(userdata);
                if(userinfo){
                    this.setState({username: userinfo.username});
                    this.setState({password: userinfo.password});
                    this.setState({remember: true});
                }
            });
    }


    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView contentContainerStyle={styles.container}>
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
                <CheckBox 
                    title='Remember Me?'
                    checked={this.state.remember}
                    onPress={ () => this.setState({remember: !this.state.remember})}
                    center
                    containerStyle={styles.formCheckBox}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleLogin()}
                        title='Login'
                        icon={
                            <Icon 
                                name='sign-in'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight:10}}
                            />
                        }
                        buttonStyle={{backgroundColor:'blue'}}
                    />
                </View>
                <View style={[styles.formButton,{marginBottom:30}]}>
                    <Button
                        onPress={() => navigate('Register')}
                        title='Register'
                        type='clear'
                        icon={
                            <Icon 
                                name='user-plus'
                                type='font-awesome'
                                color='blue'
                                iconStyle={{marginRight:10}}
                            />
                        }
                        titleStyle={{color:'blue'}}
                    />
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 5
    },
    formCheckBox: {
        margin: 5,
        backgroundColor: null
    },
    formButton: {
        marginHorizontal: 40,
        marginVertical:5
    }
});

export default Login;