import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button } from 'react-native';

class DateSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            adults: 1,
            children: 0,
            campingSpots: false,
            date: new Date(),
            showCalander: false,
        };
    }

    static navigationOptions = {
        title: 'Search Tours'
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            adults: 1,
            children: 0,
            campingSpots: false,
            date: new Date(),
            showCalander: false,
        })
    }

    render(){
        return (
            <ScrollView>
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
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
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
                        color='#c8cbae'
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
                <View style={styles.formRow} >
                    <Button
                        onPress={() => this.handleReservation()}
                        title='Search'
                        color='#c8cbae'
                        accessibilityLabel='Tap me to search for available tours to reserve'
                    />
                </View>
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
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default DateSearch;



