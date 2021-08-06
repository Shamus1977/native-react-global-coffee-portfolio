import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import RegionDetail from './regionDetailComponent';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        regions: state.regionsHistory
    }
}


class HistoryDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regionSelected: null,
        }
    }

    static navigationOptions = {
        title: 'History Directory'
    }

    onRegionSelect(regionId) {
        this.setState({regionSelected: regionId});
    }


    render(){
        const { navigate } = this.props.navigation;

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
                    regions={this.props.regions.regionsHistory}
                    onPress={regionId => this.onRegionSelect(regionId)}
                    navigate={navigate}
                />
                <RegionDetail
                    regions={this.props.regions.regionsHistory}
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(HistoryDirectory);