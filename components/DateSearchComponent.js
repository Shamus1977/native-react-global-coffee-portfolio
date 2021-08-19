import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal} from 'react-native';
import * as Notifications from 'expo-notifications';
import Intro from './IntroComponent';

class DateSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            adults: 1,
            children: 0,
            selectedRegion: '',
            campingSpots: false,
            date: new Date(),
            showCalander: false,
            showModal: false,
        };
    }

    static navigationOptions = {
        title: 'Search Tours'
    }

    toggleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm(){
        this.setState({
            adults: 1,
            children: 0,
            campingSpots: false,
            date: new Date(),
            selectedRegion: '',
            showCalander: false,
            showModal: false,
        });
    }

    async presentLocalNotifications(date, adults, children){
        function sendNotification(){
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content:{
                    title: 'Your Tour Date Search',
                    body: `Search for a tour on ${date}, for ${adults} adults \n and ${children} children, is underway`
                },
                trigger: null
            });
        }

        let permissions = await Notifications.getPermissionsAsync();
        if(!permissions.granted){
            permissions = await Notifications.requestPermissionsAsync();
        }
        if(permissions.granted){
            sendNotification()
        }
    }


    render(){
        return (
            <ScrollView>
                <View style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                    <Intro text='Search featured tours for your preferred date.' />
                </View>
                <View style={styles.formRow} >
                    <Text style={styles.formLabel}>Number of Adults</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.adults}
                        onValueChange={ value => this.setState({adults: value})}
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>
                <View style={styles.formRow} >
                    <Text style={styles.formLabel}>Number of Children</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.children}
                        onValueChange={ value => this.setState({children: value})}
                    >
                        <Picker.Item label='0' value='0' />
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>
                <View style={styles.formRow} >
                    <Text style={styles.formLabel}>Region</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.selectedRegion}
                        onValueChange={ value => this.setState({selectedRegion: value})}
                    >
                        <Picker.Item label='All' value='all' />
                        <Picker.Item label='Colombia' value='Colombia' />
                        <Picker.Item label='Ethiopia' value='Ethiopia' />
                        <Picker.Item label='Kenya' value='Kenya' />
                        <Picker.Item label='Costa Rica' value='Costa Rica' />
                    </Picker>
                </View>
                <View style={styles.formRow} >
                    <Text style={styles.formLabel}>Interested in Camping?</Text>
                    <Switch
                        style={styles.formItem}
                        value={this.state.campingSpots}
                        trackColor={{true: 'blue', false: 'grey'}}
                        onValueChange={value => this.setState({campingSpots: value})}
                    />
                </View>
                <View style={styles.formRow} >
                    <Text style={styles.formLabel}>Date:</Text>
                    <Button 
                        onPress={() => this.setState({showCalander: !this.state.showCalander})}
                        title={this.state.date.toLocaleDateString('en-US')}
                        accessibilityLabel='Tap me to choose a tour date'
                    />
                </View>
                {this.state.showCalander && (
                    <DateTimePicker
                        value={this.state.date}
                        mode={'date'}
                        display='default'
                        onChange={(event, selectedDate) => {
                            selectedDate && this.setState({date: selectedDate, showCalander: false})
                        }}
                        style={styles.formItem}
                    />
                )}
                <View style={[styles.formRow,{marginTop:-5}]} >
                    <Button
                        onPress={() => this.handleReservation()}
                        title='Search'
                        accessibilityLabel='Tap me to search for available tours to reserve'
                    />
                </View>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal} >
                        <Text style={styles.modalTitle}>Search Available Tour Dates</Text>
                        <Text style={styles.modalText}>
                            Number of Adults: {this.state.adults}
                        </Text>
                        <Text style={styles.modalText}>
                            Number of Children: {this.state.children}
                        </Text>
                        <Text style={styles.modalText}>
                            Selected Region: {this.state.selectedRegion.length > 1 ? this.state.selectedRegion : 'All'}
                        </Text>
                        <Text style={styles.modalText}>
                            Interested in Camping?: {this.state.hikeIn ? 'Yes' : 'No'}
                        </Text>
                        <Text style={styles.modalText}>
                            Date: {this.state.date.toLocaleDateString('en-US')}
                        </Text>
                        <View style={{margin:40}}>
                        <Button
                            onPress={() =>{
                                this.toggleModal();
                                this.presentLocalNotifications(this.state.date.toLocaleDateString('en-US'), this.state.adults, this.state.children)
                                this.resetForm();
                            }}
                            title='Close'
                        />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 15
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: { 
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        borderWidth: .5,
        textAlign: 'center',
        color: 'black',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default DateSearch;



