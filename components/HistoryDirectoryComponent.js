import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';


class HistoryDirectoryComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            regions: REGIONS_HISTORY
        }
    }

    static navigationOptions = {
        title: 'History Directory'
    }


    render(){
        return (
            <Directory
                regions={this.state.regions}
            />
        )
    }
}

export default HistoryDirectoryComponent;