import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        regions: state.regionsHistory
    }
}


class GeographyDirectory extends Component{

    static navigationOptions = {
        title: 'Geography Directory'
    }


    render(){
        return (
            <Directory
                regions={this.props.regionsHistory}
            />
        )
    }
}

export default connect(mapStateToProps)(GeographyDirectory);