import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import Intro from './IntroComponent';

const mapStateToProps = state => {
    return {
        tours: state.tours
    }
}


class ColombiaTourDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regionSelected: null,
        }
    }

    static navigationOptions = {
        title: 'Colombia Tour Directory'
    }

    onRegionSelect(regionId) {
        this.setState({regionSelected: regionId});
    }


    render(){
        const { navigate } = this.props.navigation;

        const region = this.props.tours.tours.filter(region => region.region === 'Colombia');

        if(this.props.tours.isLoading){
            return (<View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                        <Loading />
                    </View>)
        }

        if(this.props.tours.errMess){
            return (<View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                        <Loading />
                    </View>)
        }

        return (
            <View style={{flex: 1, backgroundColor:'rgba(0,0,0,.8)'}}>
                <Intro text='Feed your character and feed their economy...' />
                <Directory
                    regions={region}
                    onPress={regionId => this.onRegionSelect(regionId)}
                    navigate={navigate}
                    directTo='TourDetail'
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(ColombiaTourDirectory);