import React, { Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ButtonDirectory from './ButtonDirectoryComponent';
import Loading from './LoadingComponent';



const mapStateToProps = state => {
    return {
        regions: state.regionsHistory
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
            <ButtonDirectory
                regions={this.props.regions.regionsHistory}
                buttonRight='Geography'
                buttonLeft='History'
                pressButtonLeft='HistoryDirectory'
                pressButtonRight='GeographyDirectory'
                navigate={navigate}
            />
        )
    }
}

export default connect(mapStateToProps)(HistoryGeographyDirectory);