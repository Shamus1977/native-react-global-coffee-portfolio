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

class HistoryGeographyDirectory extends Component{

    static navigationOptions = {
        title: 'History and Geography'
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
                buttonRight='Geography'
                buttonLeft='History'
                pressButtonLeft='HistoryDirectory'
                pressButtonRight='GeographyDirectory'
                navigate={navigate}
            />
            </View>
        )
    }
}

export default connect(mapStateToProps)(HistoryGeographyDirectory);