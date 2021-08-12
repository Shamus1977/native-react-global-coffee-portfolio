import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        charities: state.charities
    }
}


class ColombiaCharityDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regionSelected: null,
        }
    }

    static navigationOptions = {
        title: 'Colombia Charity Directory'
    }

    onRegionSelect(regionId) {
        this.setState({regionSelected: regionId});
    }


    render(){
        const { navigate } = this.props.navigation;

        const region = this.props.charities.charities.filter(region => region.region === 'Colombia');

        if(this.props.charities.isLoading){
            return (<View style={ {flex:1, justifyContent:'center', alignContent: 'center'}}>
                        <Loading />
                    </View>)
        }

        if(this.props.charities.errMess){
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
                    directTo='CharityDetail'
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(ColombiaCharityDirectory);