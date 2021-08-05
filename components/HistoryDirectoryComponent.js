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
        return (

            <View style={{flex: 1}}>
                <Directory
                    regions={this.state.regions}
                    onPress={regionId => this.onRegionSelect(regionId)}
                />
                <RegionDetail
                    region={this.state.regions.filter(
                        region => region.id === this.state.regionSelected)[0]}
                />
            </View>
        )
    }
}

export default HistoryDirectory;