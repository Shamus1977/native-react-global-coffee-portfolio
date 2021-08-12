import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        regions: state.regionsHistory
    }
}


class ColombiaHistoryDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regionSelected: null,
        }
    }

    static navigationOptions = {
        title: 'Colombia History Directory'
    }

    onRegionSelect(regionId) {
        this.setState({regionSelected: regionId});
    }


    render(){
        const { navigate } = this.props.navigation;

        const region = this.props.regions.regionsHistory.filter(region => region.name === 'Colombia');

        if(this.props.regions.isLoading){
            return (<View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                        <Loading />
                    </View>)
        }

        if(this.props.regions.errMess){
            return (<View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                        <Loading />
                    </View>)
        }

        return (
            <View style={{flex: 1}}>
                <Directory
                    regions={region}
                    onPress={regionId => this.onRegionSelect(regionId)}
                    navigate={navigate}
                    directTo='HistoryDetail'
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(ColombiaHistoryDirectory);