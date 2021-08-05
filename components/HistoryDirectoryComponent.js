import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import RegionDetail from './regionDetailComponent';
import { View } from 'react-native';
import { REGIONS_HISTORY } from '../shared/regionsHistory';


class HistoryDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regions: REGIONS_HISTORY,
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
        return (
            <View style={{flex: 1}}>
                <Directory
                    regions={this.state.regions}
                    onPress={regionId => this.onRegionSelect(regionId)}
                    navigate={navigate}
                />
                <RegionDetail
                    regions={this.state.regions}
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

export default HistoryDirectory;