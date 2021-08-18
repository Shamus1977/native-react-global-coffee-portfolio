import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Intro from './IntroComponent';

const mapStateToProps = state => {
    return {
        regions: state.regionsGeography
    }
}


class ColombiaGeographyDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regionSelected: null,
        }
    }

    static navigationOptions = {
        title: 'Colombia Geography Directory'
    }

    onRegionSelect(regionId) {
        this.setState({regionSelected: regionId});
    }


    render(){
        const { navigate } = this.props.navigation;

        const region = this.props.regions.regionsGeography.filter(region => region.name === 'Colombia');

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
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.8)'}}>
                <Intro text='Know their Land!' />
                <Directory
                    regions={region}
                    onPress={regionId => this.onRegionSelect(regionId)}
                    navigate={navigate}
                    directTo='GeographyDetail'
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(ColombiaGeographyDirectory);