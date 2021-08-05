import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { REGIONS_HISTORY } from '../shared/regionsHistory';


class GeographyDirectory extends Component{
    constructor(props){
        super(props);
        this.state={
            regions: REGIONS_HISTORY
        }
    }

    static navigationOptions = {
        title: 'Geography Directory'
    }


    render(){
        return (
            <Directory
                regions={this.state.regions}
            />
        )
    }
}

export default GeographyDirectory;