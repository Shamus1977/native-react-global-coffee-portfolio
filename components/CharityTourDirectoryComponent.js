import React, { Component} from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ButtonDirectory from './ButtonDirectoryComponent';
import Loading from './LoadingComponent';
import Intro from './IntroComponent';



const mapStateToProps = state => {
    return {
        regions: state.regions
    };
}

class CharityTourDirectory extends Component{

    static navigationOptions = {
        title: 'Charity and Tours'
    }

    

    render() {

    const { navigate } = this.props.navigation;

        if(this.props.regions.isLoading){
            return (
                <View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                    <Loading />
                </View>
            )
        }

        if(this.props.regions.errMess){
            return (<View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                        <Loading />
                    </View>)
        }

        return (
            <ScrollView style={{backgroundColor: 'rgba(0,0,0,.8)'}}>
                <Intro text='Help them make it through... Donate and/or feed their economy...'/>
                <ButtonDirectory
                    regions={this.props.regions.regions}
                    buttonLeft='Charities'
                    buttonRight='Tours'
                    pressButtonLeft='CharityDirectory'
                    pressButtonRight='TourDirectory'
                    navigate={navigate}
                />
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(CharityTourDirectory);