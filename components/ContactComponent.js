import React, { Component } from 'react';
import { View, ScrollView, Text} from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title:'Contact'
    }

    render () {
        return (
            <ScrollView>
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
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;