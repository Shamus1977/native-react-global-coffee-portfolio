import React, { Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ButtonDirectory from './ButtonDirectoryComponent';
import Loading from './LoadingComponent';



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
            <View style={{backgroundColor: 'rgba(0,200,100,.8)'}}>
            <ButtonDirectory
                regions={this.props.regions.regions}
                buttonLeft='Charities'
                buttonRight='Tours'
                pressButtonLeft='CharityDirectory'
                pressButtonRight='TourDirectory'
                navigate={navigate}
            />
            </View>
        )
    }
}

export default connect(mapStateToProps)(CharityTourDirectory);