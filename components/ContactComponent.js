import React, { Component } from 'react';
import { View, ScrollView, Text} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';
import Intro from './IntroComponent';

class Contact extends Component {

    static navigationOptions = {
        title:'Contact'
    }

    sendMail(){
        MailComposer.composeAsync({
            recipients:['contactGCP@GCP.co'],
            subject: 'Inquiry',
            subject: 'To whom it may concern:'
        });
    }

    render () {
        return (
            <ScrollView>
                <View style={{backgroundColor:'rgba(0,0,0,.8)'}}>
                    <Intro text='Let us know what you think!' />
                </View>
                <Card
                    title='Contact Us'
                    wrapperStyle={{margin: 20}}
                >
                    <Text>The GCP Project</Text>
                    <Text>We Wanna Hear from You</Text>
                    <Text>Email: gcp@gcp.gcp</Text>
                    <Text>Phone: 555-555-5555</Text>
                    <Text>Write Us:</Text>
                    <Text>000 noWay</Text>
                    <Text>React WhackedVille</Text>
                    <Text>anyTown, U.S.A</Text>
                    <Button 
                        title='Send Email'
                        buttonStyle={{margin:40}}
                        icon={
                            <Icon 
                                name='envelope'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        onPress={() => this.sendMail()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;