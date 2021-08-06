import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import RegionDetail from './regionDetailComponent';
import { View } from 'react-native';
import { connect } from 'react-redux';

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